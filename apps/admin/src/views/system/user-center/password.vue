<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_pages_change_password_title') }}</div>
        </template>
        <template #default>
            <a-form ref="form" :model="model" :rules="rules" label-width="200px" style="max-width: 500px">
                <a-form-item :required="true" name="originalPassword" :label-col="{ span: 4 }" :label="$t('common.user_field_original_password')">
                    <a-input v-model:value="model.originalPassword" :placeholder="t('common.user_field_original_password_placeholder')" />
                </a-form-item>
                <a-form-item :required="true" name="newPassword" :label-col="{ span: 4 }" :label="$t('common.user_field_new_password')">
                    <a-input type="password" v-model:value="model.newPassword" :placeholder="t('common.user_field_new_password_placeholder')" />
                </a-form-item>
                <a-form-item :required="true" name="confirmPassword" :label-col="{ span: 4 }" :label="$t('common.user_field_confirm_password')">
                    <a-input
                        type="password"
                        v-model:value="model.confirmPassword"
                        :placeholder="t('common.user_field_confirm_password_placeholder')"
                    />
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
import { onMounted, reactive, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { useI18n } from 'vue-i18n';
import { changePasswordApi } from '@commons/core/api/user';
import { message } from 'ant-design-vue';

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
    const data = {
        originalPassword: model.originalPassword,
        newPassword: model.newPassword,
    };
    changePasswordApi(data)
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
});
</script>
