<template>
    <entry-layout>
        <div class="mt-16 sm:w-full md:w-9/12 lg:w-6/12 xl:w-4/12">
            <a-card :title="t('common.button_login')">
                <a-form ref="form" :model="model" :rules="rules" @finish="onSubmit" @finishFailed="onFailed">
                    <a-form-item name="username">
                        <a-input v-model:value="model.username" :placeholder="t('common.user_field_username_placeholder_login')" />
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input v-model:value="model.password" :placeholder="t('common.user_field_password_placeholder')" />
                    </a-form-item>
                    <a-form-item name="captchaValue" v-if="isLoginCaptchaEnabled">
                        <a-row :wrap="false">
                            <a-col flex="auto">
                                <a-input v-model:value="model.captchaValue" :placeholder="t('common.field_captcha_placeholder')" />
                            </a-col>
                            <a-col flex="none" class="mx-4">
                                <code-captcha ref="captcha" @change="onCaptchaChange" />
                            </a-col>
                        </a-row>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 8, span: 12 }">
                        <a-space wrap>
                            <a-button html-type="submit" type="primary" :disabled="loginButtonDisabled">{{ t('common.button_login') }} </a-button>
                            <a-button @click="form.resetFields()">{{ t('common.button_reset') }}</a-button>
                        </a-space>
                    </a-form-item>
                </a-form>
            </a-card>
        </div>
    </entry-layout>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { Credentials } from '@commons/core/types';
import { useAppStore, useUserStore } from '@commons/core/store';
import { credentials, log } from '@commons/core/utils';
import { EntryLayout } from '@/layouts';
import { CodeCaptcha } from '@commons/webapp/components';

const { t } = useI18n();
const router = useRouter();
const { login, getUserInfo } = useUserStore();
const { isLoginCaptchaEnabled } = useAppStore();
const form: Ref<FormInstance> = ref<FormInstance>();
const captcha: Ref<typeof CodeCaptcha> = ref<typeof CodeCaptcha>();
const loginButtonDisabled = ref(false);
const model = reactive<Credentials>(credentials);
const rules: Record<string, Rule[]> = {
    username: [{ required: true, message: t('common.user_field_username_validation_login') }],
    password: [{ required: true, message: t('common.user_field_password_validation') }],
    captchaValue: [{ required: true, message: t('common.field_captcha_validation') }],
};
const onFailed = async (errors: any) => {
    log(errors);
};
const onSubmit = async () => {
    await form.value
        .validate()
        .then(async (r) => {
            console.log(r);
            loginButtonDisabled.value = true;
            await login(model)
                .then(async () => {
                    await getUserInfo().then();
                    await router.push('/').then();
                })
                .finally(() => {
                    model.captchaKey = '';
                    model.captchaValue = '';
                    loginButtonDisabled.value = false;
                    // 刷新验证码
                    if (isLoginCaptchaEnabled) {
                        captcha.value.refresh();
                    }
                });
        })
        .catch((e) => {
            log(e);
        })
        .finally(() => {});
};
const onCaptchaChange = async (captchaKey: string) => {
    model.captchaKey = captchaKey;
};

onMounted(async () => {
    log('Page <<Login>> mounted.');
});
</script>
