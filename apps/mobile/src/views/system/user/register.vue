<template>
    <van-nav-bar :title="t('common.user_pages_register_title')" left-arrow @click-left="goBack()" />

    <div class="app-divider" />

    <van-form ref="form" @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="model.username" :placeholder="t('common.user_field_username_placeholder')" :rules="rules.username" />
            <van-field v-model="model.email" :placeholder="t('common.user_field_email_placeholder')" :rules="rules.email" />
            <van-field v-model="model.captchaValue" :placeholder="t('common.field_captcha_placeholder')" :rules="rules.captchaValue">
                <template #button>
                    <mail-captcha :email="model.email" @change="handleCaptchaChange" />
                </template>
            </van-field>
            <van-field
                :type="showPassword ? 'text' : 'password'"
                v-model="model.password"
                :placeholder="t('common.user_field_password_placeholder')"
                :rules="rules.password"
            >
                <template #button>
                    <app-icon @click="toggle(!showPassword)" :icon="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"></app-icon>
                </template>
            </van-field>
        </van-cell-group>
        <div class="m-4">
            <van-button block type="primary" native-type="submit" :disabled="registerButtonDisabled">
                {{ t('common.button_register') }}
            </van-button>
        </div>
    </van-form>

    <van-row class="px-4 pt-4">
        <van-col span="12" class="text-left">
            <van-space>
                <locale-picker />
                <dark-mode-picker />
                <theme-picker />
            </van-space>
        </van-col>
        <van-col span="12" class="text-right">
            <van-button plain hairline type="primary" size="small" @click="router.push({ path: '/login' })">
                {{ t('common.button_login') }}
            </van-button>
        </van-col>
    </van-row>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, Ref } from 'vue';
import { FieldRule, FormInstance } from 'vant';
import { goBack, log } from '@commons/core/utils';
import { AppIcon, DarkModePicker, LocalePicker, MailCaptcha, ThemePicker } from '@commons/mobile/components';
import { router } from '@commons/core/router';
import { registerApi, RegisterApiResult } from '@commons/core/api/user';
import { Register } from '@commons/core/types/user';
import { useI18n } from 'vue-i18n';
import { EmailValidator, PasswordValidator, UsernameValidator } from '@commons/mobile/utils/validation';
import { showMessage } from '@commons/mobile/utils';
import { useToggle } from '@vueuse/core';
import { R } from '@commons/core/types';

const { t } = useI18n();
const form: Ref<FormInstance> = ref<FormInstance>();
const rules = reactive<Record<string, FieldRule[]>>({
    username: [
        { required: true, message: t('common.user_field_username_validation') },
        { validator: UsernameValidator, message: t('common.user_field_username_validation_check') },
    ],
    email: [
        { required: true, message: t('common.user_field_email_validation') },
        { validator: EmailValidator, message: t('common.user_field_email_validation_check') },
    ],
    password: [
        { required: true, message: t('common.user_field_password_validation') },
        { validator: PasswordValidator, message: t('common.user_field_password_validation_check') },
    ],
    captchaValue: [{ required: true, message: t('common.field_captcha_validation') }],
});
const model = reactive<Register>({
    username: '',
    email: '',
    password: '',
    captchaKey: '',
    captchaValue: '',
});
const [showPassword, toggle] = useToggle(false);
const registerButtonDisabled: Ref<boolean> = ref(false);
const handleCaptchaChange = async (captchaKey: string) => {
    model.captchaKey = captchaKey;
};
const onSubmit = () => {
    registerApi(model).then((result: R<RegisterApiResult>) => {
        if (result.code == 200) {
            showMessage({ message: t('common.label_register_success') }, () => {
                router.push({ path: '/login' });
            });
        }
    });
};

onMounted(async () => {
    log('Page <<Register>> mounted.');
});
</script>
