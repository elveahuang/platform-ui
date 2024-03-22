<template>
    <a-modal class="app-modal" v-model:open="open" :title="$t('common.user_pages_reset_password_title')" @ok="handleSubmit" @cancel="handleCancel">
        <a-card>
            <a-form ref="entityForm" :model="model" :rules="rules" @finish="handleSubmit" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
                <a-form-item name="password" has-feedback :label="$t('common.user_field_password')">
                    <a-input
                        type="password"
                        v-model:value="model.password"
                        :placeholder="$t('common.user_field_password_placeholder')"
                        autocomplete="off"
                    />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from 'vue';
import { resetPasswordApi } from '@commons/core/api/admin/user.ts';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { UserEntity } from '@commons/core/types/user.type.ts';
import { useI18n } from 'vue-i18n';
import { checkPassword } from '@commons/webapp/utils/validation.ts';
import { log } from '@commons/core/utils';

const { t } = useI18n();
const emits = defineEmits(['update:show', 'onClose', 'onCancel']);
const props = defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false,
    },
    value: {
        type: String,
        required: false,
        default: '0',
    },
});
const open = computed<boolean>(() => props.show);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const model = reactive<UserEntity>({});
const rules: Record<string, Rule[]> = {
    password: [
        { required: true, message: t('common.user_field_password_validation') },
        {
            validator: checkPassword,
            message: t('common.user_field_password_validation_check'),
        },
    ],
};
const handleSubmit = async () => {
    await entityForm.value
        ?.validate()
        .then(async () => {
            resetPasswordApi(model).then((result) => {
                if (result.code == '200') {
                    entityForm.value?.resetFields();
                }
            });
        })
        .catch((e) => {
            log(e);
        });
    emits('update:show', false);
};
const handleCancel = () => {
    entityForm.value?.resetFields();
    emits('update:show', false);
    emits('onCancel');
};
</script>
