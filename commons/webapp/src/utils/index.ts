import { setupGlobalDirective } from '@commons/core/directives';
import { setupGlobalFilter } from '@commons/core/filters';
import { I18nConfig, setupI18n } from '@commons/core/i18n';
import { RouterConfig, router, setupRouter } from '@commons/core/router';
import { setupStore } from '@commons/core/store';
import { setDark } from '@commons/core/utils/dark';
import { HttpConfig, setupHttp } from '@commons/core/utils/http';
import { Locale } from '@commons/core/utils/locale';
import { setupProgress } from '@commons/core/utils/progress';
import { Theme, ThemeType, defaultTheme, getThemeType, setTheme } from '@commons/core/utils/theme';
import { App as AvApp, ConfigProvider as AvConfigProvider, theme as avTheme, message } from 'ant-design-vue';
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { Locale as AvLocale } from 'ant-design-vue/es/locale';
import enUs from 'ant-design-vue/es/locale/en_US';
import zhCn from 'ant-design-vue/es/locale/zh_CN';
import zhTw from 'ant-design-vue/es/locale/zh_TW';
import { isFunction } from 'lodash-es';
import { App } from 'vue';

export const toast = async (content: string): Promise<void> => {
    message.success(content, 0);
};

export const showMessage = async (options: any, callback?: Function): Promise<void> => {
    message.success(options.message, 0);
};

export const setupApp = async (app: App, routerConfig?: RouterConfig, i18nConfig?: I18nConfig, initializeApp?: Function): Promise<void> => {
    // ant-design-vue
    app.use(AvApp);
    app.use(AvConfigProvider);
    // 设置进度条
    await setupProgress();
    // 设置状态
    await setupStore(app);
    // 设置国际化
    await setupI18n(app, i18nConfig);
    // 设置路由
    await setupRouter(app, routerConfig);
    // 设置网络请求
    await setupHttp({
        toast: toast,
        excludes: ['/oauth/token'],
    } as HttpConfig);
    // 设置全局指令
    await setupGlobalDirective(app);
    // 设置全局过滤器
    await setupGlobalFilter(app);
    // 执行自定义初始化函数
    if (isFunction(initializeApp)) {
        await initializeApp().then();
    }
    // 挂载应用
    router.isReady().then((): void => {
        app.mount('#app');
    });
};

/**
 * 获取框架语言
 */
export const getAppLocale = (locale: Locale): AvLocale => {
    let localeConfig;
    switch (locale) {
        case Locale.EN_US:
            localeConfig = enUs;
            break;
        case Locale.ZH_TW:
            localeConfig = zhTw;
            break;
        default:
            localeConfig = zhCn;
    }
    return localeConfig;
};

/**
 * 获取框架主题
 */
export const getAppTheme = (theme: Theme = defaultTheme, dark: boolean = false): ThemeConfig => {
    const themeType: ThemeType = getThemeType(theme);
    return {
        algorithm: dark ? avTheme.darkAlgorithm : avTheme.defaultAlgorithm,
        token: {
            colorPrimary: themeType.primaryColor,
        },
    };
};

/**
 * 获取框架深色模式
 */
export const setAppDarkMode = (value: boolean): void => {
    setDark(value);
};

/**
 * 设置框架主题
 */
export const setAppTheme = (value: Theme): void => {
    setTheme(value);
};
