<template>
    <a-modal class="app-modal" v-model:open="open" :title="$t('common.user_pages_edit_title')" @ok="handleSubmit" @cancel="handleCancel">
        <a-card>
            <a-form ref="entityForm" :model="model" :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
                <a-form-item name="username" :label="$t('common.user_field_username')">
                    <label>{{ model.username }}</label>
                </a-form-item>
                <a-form-item name="email" :label="$t('common.user_field_email')">
                    <a-input v-model:value="model.email" :placeholder="$t('common.user_field_email_validation')" />
                </a-form-item>
                <a-form-item name="displayName" :label="$t('common.user_field_display_name')">
                    <a-input v-model:value="model.displayName" :placeholder="$t('common.user_field_display_name_placeholder')" />
                </a-form-item>
                <a-form-item name="sex" :label-col="{ span: 4 }" :label="$t('common.user_field_sex')">
                    <a-radio-group v-model:value="model.sex">
                        <a-radio v-for="(value, key) in SEX_TYPES" :key="key" :value="value.type">{{ t(value.label) }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item name="birthday" :label-col="{ span: 4 }" :label="$t('common.user_field_birthday')">
                    <app-date-picker v-model:model-value="model.birthday" type="date" />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_description')">
                    <a-textarea v-model:value="model.description" :placeholder="$t('common.field_description_placeholder')" />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { computed, ref, Ref, watch } from 'vue';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { SEX_TYPES, UserEntity } from '@commons/core/types/user.type';
import { userDetailsApi, userSaveApi } from '@commons/core/api/admin/user';
import { useI18n } from 'vue-i18n';
import { AppDatePicker } from '@commons/webapp/components';
import { log } from '@commons/core/utils';

const { t } = useI18n();
const emits = defineEmits(['update:show', 'onSuccess', 'onClose', 'onCancel']);
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
const id = computed<string>(() => props.value);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const rules: Record<string, Rule[]> = {
    email: [{ required: true, message: t('common.user_field_email_validation') }],
    displayName: [{ required: true, message: t('common.user_field_display_name_validation') }],
};
const model = reactive<UserEntity>({});
const handleSubmit = async () => {
    await entityForm.value
        .validate()
        .then(async () => {
            userSaveApi(model).then((result) => {
                if (result.code == '200') {
                    emits('update:show', false);
                    emits('onSuccess');
                }
            });
        })
        .catch((e) => {
            log(e);
        });
};
const handleCancel = () => {
    emits('update:show', false);
};

watch(id, async (value) => {
    if (Number(value) > 0) {
        await userDetailsApi({ id: value }).then((result) => {
            Object.assign(model, { ...result.data });
        });
    }
});
</script>
