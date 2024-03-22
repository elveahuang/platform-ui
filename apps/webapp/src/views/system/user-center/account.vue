<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_pages_change_password_title') }}</div>
        </template>

        <a-form ref="form" :model="model" :rules="rules" @finish="onSubmit" @finishFailed="onFailed">
            <a-form-item name="displayName" :label="$t('common.user_field_display_name')">
                <a-input v-model:value="model.displayName" :placeholder="t('common.user_field_display_name_placeholder')" />
            </a-form-item>
            <a-form-item>
                <a-button @click="onSubmit" html-type="submit" type="primary">{{ $t('common.button_submit') }}</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { useI18n } from 'vue-i18n';
import { updateAccountApi } from '@commons/core/api/user';
import { useUserStore } from '@commons/core/store';

const { t } = useI18n();
const { getUserInfo } = useUserStore();
const form: Ref<FormInstance> = ref<FormInstance>();
const rules: Record<string, Rule[]> = {
    displayName: [{ required: true, message: t('common.user_field_display_name_validation') }],
};
const model = reactive({
    displayName: '',
});
const onFailed = async (errors: any) => {
    log(errors);
};
const onSubmit = async () => {
    await form.value
        .validate()
        .then(async () => {
            const data = {
                displayName: model.displayName,
            };
            updateAccountApi(data)
                .then((result) => {
                    if (result.code == 200) {
                        form.value.resetFields();
                        getUserInfo().then();
                    }
                })
                .catch((e) => {
                    log(e);
                });
        })
        .catch((e) => {
            log(e);
        });
};

onMounted(async () => {
    log('Page <<UserCenterAccountPage>> mounted.');
});
</script>
