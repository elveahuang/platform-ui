import { env } from '@commons/core/env';
import { useI18nExternal } from '@commons/core/i18n';
import { router } from '@commons/core/router';
import { useUserStoreExternal } from '@commons/core/store';
import { log } from '@commons/core/utils';
import { progressDone, progressStart } from '@commons/core/utils/progress';
import storage from '@commons/core/utils/storage';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenStatic, Canceler, InternalAxiosRequestConfig } from 'axios';
import { isArray, isEmpty, isEqual, isFunction, merge } from 'lodash-es';
import { parse, stringify } from 'qs';

/**
 * 取消请求
 */
const CancelToken: CancelTokenStatic = axios.CancelToken;
const cancels: Canceler[] = [];
const cancelAllRequest = (message?: string): void => {
    cancels.forEach((cancel) => cancel(message));
};

/**
 * 刷新凭证，保存当前请求，等待凭证获取成功后再发送请求。
 */
let isRefreshing: boolean = false;

const requests: Array<() => void> = [];

/**
 * 超时判断
 */
const isTimeoutError = (error: AxiosError) => error.code === 'ECONNABORTED' && error.message.includes('timeout');

/**
 * 跳转到登录页面
 */
export const gotoLogin = async (options: HttpConfig): Promise<void> => {
    const { login = '/login' } = options;
    await useUserStoreExternal()
        .clearUser()
        .finally(() => {
            router.replace(login).then();
        });
};

/**
 * 是否是刷新凭证请求
 */
export const isRefreshTokenRequest = (config: InternalAxiosRequestConfig): boolean => {
    if (isEqual(config?.url, '/oauth/token') && !isEmpty(config.data)) {
        const params = parse(config.data);
        return isEqual(params?.grant_type, 'refresh_token');
    }
    return false;
};

/**
 * 处理请求失败
 */
export const handleError = async (error: AxiosError, options: HttpConfig = {}): Promise<void> => {
    log('Http handleError...');

    const { t } = useI18nExternal();
    const toast = (message: string) => {
        if (isFunction(options?.toast)) {
            options?.toast(message);
        } else {
            alert(message);
        }
    };

    if (error && error.response) {
        if (isRefreshTokenRequest(error.response.config)) {
            gotoLogin(options).then();
        } else {
            switch (error.response.status) {
                case 401:
                    break;
            }
        }
    } else {
        if (isTimeoutError(error)) {
            toast(t('common.error__time_out'));
        } else {
            toast(t('common.error__time_out'));
        }
    }
};

/**
 * 请求参数配置
 */
export interface HttpConfig {
    login?: string;
    toast?: Function;
    excludes?: string[];
}

/**
 * 创建实例
 */
export const http: AxiosInstance = axios.create({
    timeout: 30000,
    baseURL: env.server,
    withCredentials: false,
});

/**
 * 初始化
 */
export const setupHttp = async (options: HttpConfig = {}): Promise<void> => {
    log(`Http initialize...`);

    /**
     * 请求拦截
     */
    http.interceptors.request.use(async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        log('Http Request Interceptor.');

        // 打开进度条动画
        progressStart();

        // 请求白名单，设置白名单可以避免获取或者刷新凭证这些请求因为Token过期导致死循环的问题
        if (options.excludes.some((v) => config.url.indexOf(v) > -1)) {
            return config;
        }

        // 请求头增加访问凭证
        const token = storage.getAccessToken();
        if (isEmpty(token)) {
            config.headers.delete('Authorization');
        } else {
            config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
    });

    /**
     * 请求拦截，开启PHP调试
     */
    if (env.xdebug.enabled) {
        http.interceptors.request.use(async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
            log('Http XDebug Interceptor.');

            if (config.params) {
                if (isArray(config.params)) {
                    config.params = merge(config.params, {
                        XDEBUG_SESSION_START: env.xdebug.key,
                    });
                }
            } else {
                config.params = {
                    XDEBUG_SESSION_START: env.xdebug.key,
                };
            }
            return config;
        });
    }

    /**
     * 响应拦截
     */
    http.interceptors.response.use(
        async (response: AxiosResponse) => {
            // 关闭进度条动画
            progressDone();
            return Promise.resolve(response.data);
        },
        async (error: AxiosError) => {
            // 关闭进度条动画
            progressDone();

            if (error && error.response) {
                const response: AxiosResponse = error.response as AxiosResponse;
                switch (response.status) {
                    case 400:
                        await gotoLogin(options).then();
                        return Promise.reject(error);
                    case 401:
                        if (isRefreshTokenRequest(response.config)) {
                            await gotoLogin(options).then();
                            return Promise.reject(error);
                        } else if (isRefreshing) {
                            const config: InternalAxiosRequestConfig = response.config;
                            return new Promise((resolve) => {
                                requests.push(() => {
                                    resolve(http(config));
                                });
                            });
                        } else {
                            isRefreshing = true;
                            return useUserStoreExternal()
                                .refresh()
                                .then(() => {
                                    // 重启已暂停请求
                                    requests.forEach((request) => request());
                                    // 重新发送请求
                                    const config = response.config;
                                    return http(config);
                                })
                                .catch(async () => {
                                    await handleError(error, options);
                                })
                                .finally(() => {
                                    isRefreshing = false;
                                });
                        }
                    default:
                        await handleError(error, options);
                        break;
                }
            } else {
                await handleError(error, options);
            }
            return Promise.reject(error);
        },
    );
};

const cancelConfig: AxiosRequestConfig = {
    cancelToken: new CancelToken((cancel: Canceler): void => {
        cancels.push(cancel);
    }),
};

/**
 * Get
 */
export const getConfig: AxiosRequestConfig = {
    data: undefined,
    headers: undefined,
    ...cancelConfig,
};

export const get = <R = any, P = any>(url: string, data?: P, config: AxiosRequestConfig = getConfig): Promise<R> => {
    config.params = data;
    return http.get(url, config);
};

/**
 * Post
 */
export const postConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: (data: any) => {
        return stringify(data);
    },
    ...cancelConfig,
};

export const post = <R = any, P = any>(url: string, data?: P, config: AxiosRequestConfig = postConfig): Promise<R> => {
    return http.post(url, data || {}, config);
};

/**
 * Post Json
 */
export const postJsonConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: (data: any) => {
        return JSON.stringify(data);
    },
    ...cancelConfig,
};

export const postJson = <R = any, P = any>(url: string, data?: P, config: AxiosRequestConfig = postJsonConfig): Promise<R> => {
    return http.post(url, data || {}, config);
};

/**
 * Post FormBody
 */
export const postFormConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    ...cancelConfig,
};

export const postForm = <R = any, P = any>(url: string, data?: P, config: AxiosRequestConfig = postFormConfig): Promise<R> => {
    return http.post(url, data || {}, config);
};

/**
 * Post Multipart
 */
export const postMultipartConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    ...cancelConfig,
};

export const postMultipart = <R = any, P = any>(url: string, data?: P, config: AxiosRequestConfig = postMultipartConfig): Promise<R> => {
    return http.post(url, data || {}, config);
};

export { CancelToken, cancelAllRequest, cancels };

export default http;
