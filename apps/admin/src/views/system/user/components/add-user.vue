<template>
    <a-modal class="app-modal" v-model:open="open" :title="$t('common.user_pages_add_title')" @ok="handleSubmit" @cancel="handleCancel">
        <a-card>
            <a-form ref="form" :model="model" :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
                <a-form-item name="username" :label="$t('common.user_field_username')">
                    <a-input v-model:value="model.username" :placeholder="$t('common.user_field_username_placeholder')" />
                </a-form-item>
                <a-form-item name="password" :label="$t('common.user_field_password')">
                    <a-input type="password" v-model:value="model.password" :placeholder="$t('common.user_field_password_placeholder')" />
                </a-form-item>
                <a-form-item name="email" :label="$t('common.user_field_email')">
                    <a-input v-model:value="model.email" :placeholder="$t('common.user_field_email_validation')" />
                </a-form-item>
                <a-form-item name="displayName" :label="$t('common.user_field_display_name')">
                    <a-input v-model:value="model.displayName" :placeholder="$t('common.user_field_display_name_placeholder')" />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_description')">
                    <a-textarea v-model:value="model.description" :placeholder="$t('common.field_description_placeholder')" />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from 'vue';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { UserEntity } from '@commons/core/types/user.type.ts';
import { userSaveApi } from '@commons/core/api/admin/user.ts';
import { useI18n } from 'vue-i18n';
import { checkUsername, CheckUsernamePayload } from '@commons/webapp/utils/validation';
import { log } from '@commons/core/utils';

const { t } = useI18n();
const emits = defineEmits(['update:show', 'onSuccess', 'onClose', 'onCancel']);
const props = defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false,
    },
});
const open = computed<boolean>(() => props.show);
const form: Ref<FormInstance> = ref<FormInstance>();
const model = reactive<UserEntity>({});
const rules: Record<string, Rule[]> = {
    username: [
        { required: true, message: t('common.user_field_username_validation') },
        {
            validator: checkUsername,
            message: t('common.user_field_username_validation_check'),
            transform: (value: string): CheckUsernamePayload => {
                return { username: value, id: 0 };
            },
        },
    ],
    password: [{ required: true, message: t('common.user_field_password_validation') }],
    email: [{ required: true, message: t('common.user_field_email_validation') }],
    displayName: [{ required: true, message: t('common.user_field_display_name_validation') }],
};
const handleSubmit = async () => {
    await form.value
        .validate()
        .then(async () => {
            userSaveApi(model).then((result) => {
                if (result.code == '200') {
                    Object.assign(model, { ...new UserEntity() });
                    emits('update:show', false);
                    emits('onSuccess');
                    emits('onClose');
                }
            });
        })
        .catch((e) => {
            log(e);
        });
};
const handleCancel = () => {
    Object.assign(model, { ...new UserEntity() });
    emits('update:show', false);
    emits('onCancel');
};
</script>
