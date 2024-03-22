<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_pages_change_email_title') }}</div>
        </template>
        <template #default>
            <a-form ref="form" :model="model" :rules="rules" label-width="200px" style="max-width: 500px">
                <a-form-item name="email" :label-col="{ span: 4 }" :label="$t('common.user_field_current_email')">
                    <a-input v-model:value="model.email" :disabled="true" :placeholder="model.email" />
                </a-form-item>
                <a-form-item name="password" :required="true" :label-col="{ span: 4 }" :label="$t('common.user_field_password')">
                    <a-input type="password" v-model:value="model.password" :placeholder="t('common.user_field_password')" />
                </a-form-item>
                <a-form-item name="newEmail" :required="true" :label-col="{ span: 4 }" :label="$t('common.user_field_new_email_placeholder')">
                    <a-input-group compact>
                        <a-input
                            v-model:value="model.newEmail"
                            :placeholder="t('common.user_field_email_validation')"
                            style="width: calc(100% - 100px)"
                        />
                        <mail-captcha :email="model.newEmail" @change="onCaptchaChange" />
                    </a-input-group>
                </a-form-item>
                <a-form-item name="captchaValue" :required="true" :label-col="{ span: 4 }" :label="$t('common.field_captcha')">
                    <a-input v-model:value="model.captchaValue" :placeholder="t('common.field_captcha_placeholder')" />
                </a-form-item>
                <a-form-item :colon="false" :label-col="{ span: 16 }">
                    <template #label>
                        <a-button class="!w-36" @click="onSubmit" type="primary">
                            {{ $t('common.button_submit') }}
                        </a-button>
                    </template>
                </a-form-item>
            </a-form>
        </template>
    </a-card>
</template>

<script setup lang="ts">
import { createVNode, onMounted, reactive, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { useI18n } from 'vue-i18n';
import { changeEmailApi, changePasswordApi } from '@commons/core/api/user';
import { userInfoApi } from '@commons/core/api/auth.ts';
import { MailCaptcha } from '@commons/webapp/components';
import { showMessage } from '@commons/mobile/utils';
import { router } from '@commons/core/router';
import { message, Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

const { t } = useI18n();
const form: Ref<FormInstance> = ref<FormInstance>();
const rules: Record<string, Rule[]> = {
    password: [{ required: true, message: t('common.user_field_password_placeholder') }],
    newEmail: [{ required: true, message: t('common.user_field_new_email_validation') }],
    captchaValue: [{ required: true, message: t('common.field_captcha_placeholder') }],
};

const model = reactive({
    email: '',
    password: '',
    newEmail: '',
    captchaKey: '',
    captchaValue: '',
});

const onCaptchaChange = async (captchaKey: string) => {
    model.captchaKey = captchaKey;
};

const onSubmit = async () => {
    changeEmailApi({
        email: model.email,
        password: model.password,
        newEmail: model.newEmail,
        captchaKey: model.captchaKey,
        captchaValue: model.captchaValue,
    })
        .then((result) => {
            if (result.code == 200) {
                message.success(t('common.modify_success'));
            } else {
                message.error(t('common.modify_fail'));
            }
        })
        .catch((e) => {
            log(e);
            message.error(t('common.system_error'));
        });
};

onMounted(async () => {
    log('Page <<UserCenterPasswordPage>> mounted.');
    userInfoApi()
        .then((result) => {
            log('用户信息结果：');
            log(result.data);
            Object.assign(model, result.data);
        })
        .catch((e) => {});
});
</script>
