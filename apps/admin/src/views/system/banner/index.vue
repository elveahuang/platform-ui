<template>
    <app-page-header>
        <template #title>{{ $t('common.banner_management') }}</template>
    </app-page-header>

    <a-card>
        <data-table
            ref="dataTableRef"
            v-model:model="dataTableModel"
            @getDataList="getDataList"
            :row-selection-enabled="dataTableRowSelectionEnabled"
            :tool-bar-enabled="true"
        >
            <template #toolBar>
                <a-button type="primary" @click="showEntityFormModal(0)">{{ $t('common.banner_add') }}</a-button>
                <a-button @click="dataTableRowSelectionEnabled = !dataTableRowSelectionEnabled">
                    {{ dataTableRowSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
                <a-button danger @click="handleDelete(0)">{{ $t('common.button_delete') }}</a-button>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-button type="primary" size="small" @click="showPreviewModal(record)">
                            <template #icon>
                                <app-icon icon="mdi:eye-outline" />
                            </template>
                        </a-button>
                        <a-button type="primary" size="small" @click="showEntityFormModal(record.id)">
                            <template #icon>
                                <app-icon icon="ant-design:edit-outlined" />
                            </template>
                        </a-button>
                        <a-popconfirm :title="$t('common.label_confirm_delete_record')" @confirm="handleDelete(record.id)">
                            <a-button danger type="primary" size="small" @confirm="handleDelete(record.id)">
                                <template #icon>
                                    <app-icon icon="ant-design:close-outlined" />
                                </template>
                            </a-button>
                        </a-popconfirm>
                    </a-space>
                </template>
            </template>
        </data-table>
    </a-card>

    <a-modal
        class="app-modal"
        v-model:open="previewModalOpen"
        :title="$t('common.label_preview')"
        @ok="handlePreviewModalOk"
        @cancel="handlePreviewModalCancel"
    >
        <a-card>
            <div v-html="previewContentHtml"></div>
        </a-card>
    </a-modal>

    <a-modal class="app-modal" v-model:open="entityFormModalOpen" :title="entityFormModalTitle" @ok="handleFormSubmit" @cancel="handleFormCancel">
        <a-card>
            <a-form
                ref="entityForm"
                :model="entityFormModel"
                :rules="entityFormRules"
                @finish="handleFormSubmit"
                v-bind="{ labelCol: { span: 4 }, wrapperCol: { span: 16 } }"
            >
                <a-form-item name="title" :label="$t('common.field_title')">
                    <a-input v-model:value="entityFormModel['title']" :placeholder="t('common.field_title_placeholder')" />
                </a-form-item>
                <a-form-item name="type" :label="$t('common.field_type')">
                    <app-dict-select
                        :multiple-ind="true"
                        :key="entityFormModel['id']"
                        v-model:relation="entityFormModel['type']"
                        :code="SystemDictionaryConstants.BANNER"
                    />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_content')">
                    <app-editor v-model:value="entityFormModel['description']" />
                </a-form-item>
                <a-form-item name="idx" :label="$t('common.serial_number')">
                    <a-input-number :max="999" :min="0" v-model:value="entityFormModel['sortOrder']" :placeholder="t('common.input_serial_number')" />
                </a-form-item>
                <a-form-item name="cover" :label="$t('common.field_cover')">
                    <app-file-upload
                        :key="entityFormModel['id']"
                        v-model:attachment="entityFormModel['cover']"
                        :code="SystemAttachmentConstants.BANNER_COVER"
                    />
                </a-form-item>
                <a-form-item name="mobileCover" :label="$t('common.field_mobile_cover')">
                    <app-file-upload
                        :key="entityFormModel['id']"
                        v-model:attachment="entityFormModel['mobileCover']"
                        :code="SystemAttachmentConstants.BANNER_MOBILE_COVER"
                    />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table.ts';
import { Ref, ref } from 'vue';
import { AppDictSelect, AppFileUpload, AppIcon, AppPageHeader, DataTable } from '@commons/webapp/components';
import { bannerDeleteApi, bannerDetailsApi, bannerListApi, bannerSaveApi } from '@commons/core/api/admin/banner.ts';
import { useI18n } from 'vue-i18n';
import { Banner } from '@commons/core/types/banner.ts';
import { FormInstance, Rule } from 'ant-design-vue/es/form';
import { Key } from '@commons/core/types';
import { isEmpty } from 'lodash-es';
import { showMessage } from '@commons/webapp/utils';
import { AppEditor } from '@commons/core/components';
import { SystemAttachmentConstants, SystemDictionaryConstants } from '@commons/core/utils/constants.ts';
import { AttachmentEntity } from '@commons/core/types/attachment.type.ts';
import { DictRelationVo } from '@commons/core/types/dict.ts';
import { log } from '@commons/core/utils';

const { t } = useI18n();
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await bannerListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
const dataTableColumns = [
    {
        title: t('common.serial_number'),
        dataIndex: 'sortOrder',
        key: 'sortOrder',
        width: 100,
        ellipsis: true,
        sorter: true,
    },
    {
        title: t('common.field_title'),
        dataIndex: 'title',
        key: 'title',
        width: 150,
        ellipsis: true,
        sorter: true,
    },
    {
        title: t('common.field_last_modified_at'),
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        width: 120,
        sorter: true,
        ellipsis: true,
    },
    {
        title: t('common.label_action'),
        dataIndex: 'operation',
        key: 'operation',
        width: 50,
        ellipsis: true,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const entityFormModel = reactive<Banner>(new Banner());
const entityFormModalTitle = ref<string>('');
const entityFormModalOpen = ref<boolean>(false);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const showEntityFormModal = async (id?: number) => {
    // 每次弹出表单，清空上一次的校验结果
    entityForm.value?.clearValidate();
    if (id && id > 0) {
        entityFormModalTitle.value = t('common.banner_edit');
        await bannerDetailsApi({ id: id }).then((result) => {
            entityFormModalOpen.value = true;
            Object.assign(entityFormModel, { ...result.data });
        });
    } else {
        entityFormModalTitle.value = t('common.banner_add');
        Object.assign(entityFormModel, new Banner());
        entityFormModalOpen.value = true;
    }
};
const handleFormSubmit = async (): Promise<void> => {
    await entityForm.value
        .validate()
        .then(async () => {
            bannerSaveApi(entityFormModel).then((result) => {
                if (result.code == '200') {
                    entityFormModalOpen.value = false;
                    dataTableRef.value.refresh();
                }
            });
        })
        .catch((e) => {
            log(e);
        });
};
const handleFormCancel = () => {
    entityFormModalOpen.value = false;
};
const entityFormRules: Record<string, Rule[]> = {
    title: [{ required: true, message: t('common.field_title_validation') }],
    type: [
        {
            required: true,
            message: t('common.field_type_validation'),
            validator: async (rule: Rule, type: DictRelationVo): Promise<void> => {
                return !isEmpty(type.ids) ? Promise.resolve() : Promise.reject();
            },
            transform: (type: DictRelationVo): DictRelationVo => type,
        },
    ],
    cover: [
        {
            required: true,
            message: t('common.field_cover_validation'),
            validator: async (rule: Rule, cover: AttachmentEntity): Promise<void> => {
                return !isEmpty(cover.fileList) ? Promise.resolve() : Promise.reject();
            },
            transform: (cover: AttachmentEntity): AttachmentEntity => cover,
        },
    ],
    mobileCover: [
        {
            required: true,
            message: t('common.field_mobile_cover_validation'),
            validator: async (rule: Rule, mobileCover: AttachmentEntity): Promise<void> => {
                return !isEmpty(mobileCover.fileList) ? Promise.resolve() : Promise.reject();
            },
            transform: (mobileCover: AttachmentEntity): AttachmentEntity => mobileCover,
        },
    ],
};
const handleDelete = async (id: number = 0): Promise<void> => {
    const ids: Key[] = id > 0 ? [id] : dataTableRef.value.selectedRowKeys();
    if (isEmpty(ids)) {
        showMessage({ message: t('common.label_please_select_one_record') }).then();
        return;
    }
    bannerDeleteApi({ ids: ids }).then((result) => {
        if (result.code == '200') {
            entityFormModalOpen.value = false;
            dataTableRef.value.refresh();
        }
    });
};
const previewModalOpen = ref<boolean>(false);
const previewContentHtml = ref<string>('');
const showPreviewModal = async (entity: Banner) => {
    previewContentHtml.value = entity.description;
    previewModalOpen.value = true;
};
const handlePreviewModalOk = async () => {
    previewContentHtml.value = '';
    previewModalOpen.value = false;
};
const handlePreviewModalCancel = async () => {
    previewContentHtml.value = '';
    previewModalOpen.value = false;
};
</script>
