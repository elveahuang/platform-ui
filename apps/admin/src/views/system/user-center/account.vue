<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_label_my_profile') }}</div>
        </template>
        <template #default>
            <a-form ref="form" :model="model" :rules="rules" label-width="200px" style="max-width: 500px">
                <a-form-item name="username" :label-col="{ span: 4 }" :label="$t('common.field_user_name')">
                    <label>{{ model.username }}</label>
                </a-form-item>
                <a-form-item name="displayName" :label-col="{ span: 4 }" :label="$t('common.user_field_nickname')">
                    <a-input v-model:value="model.displayName" :placeholder="model.displayName" />
                </a-form-item>
                <a-form-item name="sex" :label-col="{ span: 4 }" :label="$t('common.user_field_sex')">
                    <a-radio-group v-model:value="model.sex">
                        <a-radio :value="t('common.user_field_sex_male')">{{ t('common.user_field_sex_male') }}</a-radio>
                        <a-radio :value="t('common.user_field_sex_female')">{{ t('common.user_field_sex_female') }}</a-radio>
                        <a-radio :value="t('common.user_field_sex_unspecified')">{{ t('common.user_field_sex_unspecified') }} </a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item name="birthday" :label-col="{ span: 4 }" :label="$t('common.user_field_birthday')">
                    <a-date-picker show-time :placeholder="model.birthday" @change="onChange" />
                </a-form-item>
                <a-form-item :colon="false" :label-col="{ span: 12 }">
                    <template #label>
                        <a-button class="!w-28" @click="onSubmit" type="primary">
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
import { updateAccountApi } from '@commons/core/api/user';
import { userInfoApi } from '@commons/core/api/auth.ts';
import { message } from 'ant-design-vue';
import { Dayjs } from 'dayjs';

const { t } = useI18n();
const form: Ref<FormInstance> = ref<FormInstance>();
const rules: Record<string, Rule[]> = {
    originalPassword: [{ required: true, message: t('common.user_field_original_password_validation') }],
    newPassword: [{ required: true, message: t('common.user_field_new_password_validation') }],
    confirmPassword: [{ required: true, message: t('common.user_field_confirm_password_validation') }],
};

const model = reactive({
    username: '',
    displayName: '',
    email: '',
    sex: '',
    birthday: '',
});

const onChange = (value: Dayjs, dateString: string): void => {
    log(dateString);
    model.birthday = dateString;
    log(model.birthday);
};

const onSubmit = async () => {
    updateAccountApi({
        displayName: model.displayName,
        sex: model.sex,
        birthday: model.birthday,
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
