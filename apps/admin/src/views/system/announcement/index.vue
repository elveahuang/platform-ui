<template>
    <app-page-header>
        <template #title>{{ $t('common.announcement_management') }}</template>
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
                <a-button type="primary" @click="showEntityFormModal(0)">{{ $t('common.button_add') }}</a-button>
                <a-button @click="dataTableRowSelectionEnabled = !dataTableRowSelectionEnabled">
                    {{ dataTableRowSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
                <a-button danger @click="handleDelete(0)">{{ $t('common.button_delete') }}</a-button>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'publishPeriod'">
                    <div v-html="formatDatetimePeriod(record.startDatetime, record.endDatetime)"></div>
                </template>
                <template v-if="column.dataIndex === 'status'">
                    <div v-if="record.status">{{ $t('common.field_publish_status_on') }}</div>
                    <div v-else>{{ $t('common.field_publish_status_off') }}</div>
                </template>
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
                    <a-input v-model:value="entityFormModel.title" :placeholder="t('common.field_title_placeholder')" />
                </a-form-item>
                <a-form-item name="content" :label="$t('common.field_content')">
                    <app-editor v-model:value="entityFormModel.content" />
                </a-form-item>
                <a-form-item name="status" :label="$t('common.field_publish_status')" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
                    <a-radio-group v-model:value="entityFormModel.status">
                        <a-radio :value="true">{{ t('common.field_publish_status_finish') }}</a-radio>
                        <a-radio :value="false">{{ t('common.field_publish_status_unfinished') }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item name="endDatetime" :label="$t('common.field_publish_period')">
                    <app-date-range-picker v-model:from="entityFormModel.startDatetime" v-model:to="entityFormModel.endDatetime" />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_description')">
                    <a-textarea v-model:value="entityFormModel.description" :placeholder="t('common.field_description_placeholder')" allow-clear />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table.ts';
import { announcementDeleteApi, announcementDetailsApi, announcementListApi, announcementSaveApi } from '@commons/core/api/admin/announcement';
import { onMounted, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import { AppDateRangePicker, AppIcon, AppPageHeader, DataTable } from '@commons/webapp/components';
import { useI18n } from 'vue-i18n';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { Announcement, defaultAnnouncement } from '@commons/core/types/announcement';
import { Key } from '@commons/core/types';
import { isEmpty } from 'lodash-es';
import { showMessage } from '@commons/webapp/utils';
import { AppEditor } from '@commons/core/components';
import { formatDatetimePeriod } from '@commons/core/utils/date.ts';
import { editorNotAllowEmpty } from '@commons/webapp/utils/validation.ts';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
    {
        title: t('common.field_title'),
        dataIndex: 'title',
        key: 'title',
        width: 200,
        ellipsis: true,
        fixed: 'left',
    },
    {
        title: t('common.field_publish_status'),
        dataIndex: 'status',
        key: 'status',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_publish_period'),
        dataIndex: 'publishPeriod',
        key: 'publishPeriod',
        width: 200,
        ellipsis: true,
    },
    {
        title: t('common.field_last_modified_at'),
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.label_action'),
        dataIndex: 'operation',
        key: 'operation',
        width: 45,
        ellipsis: true,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await announcementListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
// 添加编辑
const entityFormModalTitle = ref<string>('');
const entityFormModalOpen = ref<boolean>(false);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const entityFormModel = reactive<Announcement>(defaultAnnouncement);
const entityFormRules: Record<string, Rule[]> = {
    title: [{ required: true, message: t('common.field_title_validation') }],
    content: [{ required: true, message: t('common.field_description_validation'), validator: editorNotAllowEmpty }],
};
const resetEntityFormModel = () => {
    entityFormModel.id = 0;
    entityFormModel.title = '';
    entityFormModel.content = '';
    entityFormModel.description = '';
    entityFormModel.status = false;
    entityFormModel.startDatetime = '';
    entityFormModel.endDatetime = '';
};
const showEntityFormModal = async (id?: number) => {
    // 每次弹出表单，清空上一次的校验结果
    entityForm.value?.clearValidate();
    if (id && id > 0) {
        entityFormModalTitle.value = t('common.announcement_pages_edit_title');
        await announcementDetailsApi({ id: id }).then((result) => {
            entityFormModalOpen.value = true;
            Object.assign(entityFormModel, { ...result.data });
        });
    } else {
        entityFormModalOpen.value = true;
        entityFormModalTitle.value = t('common.announcement_pages_add_title');
        resetEntityFormModel();
    }
};
const handleFormCancel = () => {
    entityFormModalOpen.value = false;
};
const handleFormSubmit = async (): Promise<void> => {
    await entityForm.value.validate().then(async () => {
        announcementSaveApi(entityFormModel).then((result) => {
            if (result.code == '200') {
                entityFormModalOpen.value = false;
                dataTableRef.value.refresh();
            }
        });
    });
};
// 删除
const handleDelete = async (id: number = 0): Promise<void> => {
    const ids: Key[] = id > 0 ? [id] : dataTableRef.value.selectedRowKeys();
    if (isEmpty(ids)) {
        showMessage({ message: t('common.label_please_select_one_record') }).then();
        return;
    }
    announcementDeleteApi({ ids: ids }).then((result) => {
        if (result.code == '200') {
            entityFormModalOpen.value = false;
            dataTableRef.value.refresh();
        }
    });
};
// 预览
const previewModalOpen = ref<boolean>(false);
const previewContentHtml = ref<string>('');
const showPreviewModal = async (entity: Announcement) => {
    previewContentHtml.value = entity.content;
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

onMounted(async (): Promise<void> => {
    log('Page <<AnnouncementAdminListPage>> mounted.');
});
</script>
