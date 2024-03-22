import { checkUsernameApi } from '@commons/core/api/user.ts';
import { R } from '@commons/core/types';
import type { Rule } from 'ant-design-vue/es/form';

export declare type CheckUsernamePayload = {
    id: number;
    username: string;
};

export const checkUsername = async (rule: Rule, payload: CheckUsernamePayload): Promise<void> => {
    const result: R<Boolean> = await checkUsernameApi({ username: payload.username, id: payload.id });
    if (result.code == '200' && result.data === true) {
        return Promise.resolve();
    }
    return Promise.reject();
};

export const checkPassword = async (rule: Rule, value: string): Promise<void> => {
    const p: RegExp = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (p.test(value)) {
        return Promise.resolve();
    } else {
        return Promise.reject();
    }
};

export const editorNotAllowEmpty = async (rule: Rule, value: string): Promise<void> => {
    if (
        value
            ?.replace(/<[^>]+>/g, '')
            ?.replace(/\s+/g, ' ')
            ?.trim()
    ) {
        return Promise.resolve();
    } else {
        return Promise.reject();
    }
};
