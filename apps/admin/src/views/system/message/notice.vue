<template>
    <a-page-header :title="t('common.notice_management')" />

    <a-card>
        <div class="pb-4">
            <a-space>
                <a-button @click="dataTableRowSelectionEnabled = !dataTableRowSelectionEnabled">
                    {{ dataTableRowSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
                <a-button @click="handleDelete">{{ $t('common.button_delete') }}</a-button>
            </a-space>
        </div>
        <data-table
            ref="dataTableRef"
            v-model:model="dataTableModel"
            @getDataList="getDataList"
            :row-selection-enabled="dataTableRowSelectionEnabled"
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-button type="primary" @click="showEntityFormModal(record.id)">{{ $t('common.button_edit') }}</a-button>
                        <a-popconfirm :title="$t('common.label_confirm_delete_record')" @confirm="handleDelete(record.id)">
                            <a-button danger type="primary">{{ $t('common.button_delete') }}</a-button>
                        </a-popconfirm>
                    </a-space>
                </template>
            </template>
        </data-table>
    </a-card>

    <a-modal class="app-modal" v-model:open="entityFormModalOpen" :title="entityFormModalTitle" @ok="handleFormSubmit" @cancel="handleFormCancel">
        <a-card>
            <a-form
                ref="entityForm"
                :model="entityFormModel"
                :rules="entityFormRules"
                @finish="handleFormSubmit"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 12 }"
            >
                <a-form-item name="title" :label="$t('common.field_title')">
                    <a-input v-model:value="entityFormModel.title" :placeholder="t('common.field_title_placeholder')" />
                </a-form-item>
                <a-form-item name="content" :label="$t('common.field_content')">
                    <a-input v-model:value="entityFormModel.content" :placeholder="t('common.field_content_placeholder')" />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_description')">
                    <a-input v-model:value="entityFormModel.description" :placeholder="t('common.field_description_placeholder')" />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table.ts';
import { systemNoticeDeleteApi, systemNoticeListApi } from '@commons/core/api/admin/system-notice';
import { onMounted, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import { DataTable } from '@commons/webapp/components';
import { useI18n } from 'vue-i18n';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { SystemNotice } from '@commons/core/types/system-notice';
import { Key } from '@commons/core/types';
import { isEmpty } from 'lodash-es';
import { showMessage } from '@commons/mobile/utils';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
    {
        title: t('common.field_title'),
        dataIndex: 'subject',
        key: 'subject',
        width: 300,
        sorter: true,
    },
    {
        title: t('common.field_content'),
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: t('common.field_last_modified_at'),
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        sorter: true,
    },
    {
        title: t('common.label_action'),
        dataIndex: 'operation',
        key: 'operation',
        width: 200,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await systemNoticeListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
// 添加编辑
const entityFormModalTitle = ref<string>('');
const entityFormModalOpen = ref<boolean>(false);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const entityFormModel = reactive<SystemNotice>({});
const entityFormRules: Record<string, Rule[]> = {
    title: [{ required: true, message: t('common.field_title_validation') }],
    content: [{ required: true, message: t('common.field_description_validation') }],
};
const showEntityFormModal = async (id?: number) => {
    // 每次弹出表单，清空上一次的校验结果
    entityForm.value?.clearValidate();
    entityFormModalOpen.value = true;
    if (id && id > 0) {
        entityFormModalTitle.value = t('common.announcement_pages_edit_title');
        await systemNoticeDeleteApi({ id: id }).then((result) => {
            Object.assign(entityFormModel, { ...result.data });
        });
    } else {
        entityFormModalTitle.value = t('common.announcement_pages_add_title');
    }
};

// 删除
const handleDelete = async (id: number = 0) => {
    const ids: Key[] = id > 0 ? [id] : dataTableRef.value.selectedRowKeys();
    if (isEmpty(ids)) {
        showMessage({ message: '请选择' }).then();
        return;
    }
    systemNoticeDeleteApi({ ids: ids }).then((result) => {
        if (result.code == '200') {
            entityFormModalOpen.value = false;
            dataTableRef.value.refresh();
        }
    });
};

onMounted(async () => {
    log('Page <<AnnouncementAdminListPage>> mounted.');
});
</script>
