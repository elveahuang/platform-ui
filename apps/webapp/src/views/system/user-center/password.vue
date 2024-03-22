<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_pages_change_password_title') }}</div>
        </template>
        <template #default>
            <a-form ref="form" :model="model" :rules="rules" label-width="200px" style="max-width: 500px">
                <a-form-item name="originalPassword" :label="$t('common.user_field_original_password')">
                    <a-input v-model="model.originalPassword" :placeholder="t('common.user_field_original_password_placeholder')" />
                </a-form-item>
                <a-form-item name="newPassword" :label="$t('common.user_field_new_password')">
                    <a-input v-model="model.newPassword" :placeholder="t('common.user_field_new_password')" />
                </a-form-item>
                <a-form-item name="confirmPassword" :label="$t('common.user_field_confirm_password')">
                    <a-input v-model="model.confirmPassword" :placeholder="t('common.user_field_new_password_placeholder')" />
                </a-form-item>
                <a-form-item>
                    <a-button @click="onSubmit" type="primary">
                        {{ $t('common.button_submit') }}
                    </a-button>
                </a-form-item>
            </a-form>
        </template>
    </a-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { useI18n } from 'vue-i18n';
import { changePasswordApi } from '@commons/core/api/user';

const { t } = useI18n();
const form: Ref<FormInstance> = ref<FormInstance>();
const rules: Record<string, Rule[]> = {
    originalPassword: [{ required: true, message: t('common.user_field_original_password_validation') }],
    newPassword: [{ required: true, message: t('common.user_field_new_password_validation') }],
    confirmPassword: [{ required: true, message: t('common.user_field_confirm_password_validation') }],
};
const model = reactive({
    originalPassword: '',
    newPassword: '',
    confirmPassword: '',
});
const onSubmit = async () => {
    await form.value.validate((valid: boolean) => {
        if (valid) {
            const data = {
                originalPassword: model.originalPassword,
                newPassword: model.newPassword,
            };
            changePasswordApi(data)
                .then((result) => {
                    if (result.code == 200) {
                        form.value.resetFields();
                    }
                })
                .catch((e) => {
                    log(e);
                });
        }
    });
};

onMounted(async () => {
    log('Page <<UserCenterPasswordPage>> mounted.');
});
</script>
