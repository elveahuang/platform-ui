<template>
    <a-page-header :title="t('common.field_online_users')" />

    <a-card>
        <data-table
            ref="dataTableRef"
            v-model:model="dataTableModel"
            @getDataList="getDataList"
            :row-selection-enabled="dataTableRowSelectionEnabled"
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-button type="primary" @click="showEntityFormModal(record.id)">{{ $t('查看') }}</a-button>
                    </a-space>
                </template>
                <template v-else-if="column.dataIndex === 'success'">
                    <a-space v-if="record.success">成功</a-space>
                    <a-space v-else-if="!record.success">失败</a-space>
                </template>
            </template>
        </data-table>
    </a-card>

    <a-modal class="app-modal" v-model:open="entityFormModalOpen" :title="entityFormModalTitle" @ok="handleFormSubmit" @cancel="handleFormCancel">
        <a-card>
            <a-form ref="entityForm" :model="entityFormModel" @finish="handleFormSubmit" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
                <a-form-item name="address" :label="$t('common.field_user_name')">
                    <a-input disabled v-model:value="entityFormModel.username" />
                </a-form-item>
                <a-form-item name="chain" :label="$t('common.field_ip')">
                    <a-input disabled v-model:value="entityFormModel.host" />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_user_agent')">
                    <a-input disabled v-model:value="entityFormModel.ua" />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_client_id')">
                    <a-input disabled v-model:value="entityFormModel.clientId" />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_client_name')">
                    <a-input disabled v-model:value="entityFormModel.clientName" />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_start_datetime')">
                    <a-input disabled v-model:value="entityFormModel.startDatetime" />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_last_access_datetime')">
                    <a-input disabled v-model:value="entityFormModel.startDatetime" />
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
import { OnlineUsers } from '@commons/core/types/online-users.ts';
import { onlineUsersListApi, userSessionDetailsApi } from '@commons/core/api/admin/online-users.ts';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
    {
        title: t('common.field_user_name'),
        dataIndex: 'username',
        key: 'username',
        width: 100,
        ellipsis: true,
        fixed: 'left',
    },
    {
        title: t('common.field_ip'),
        dataIndex: 'host',
        key: 'host',
        sorter: true,
        width: 100,
        ellipsis: true,
        fixed: 'left',
    },
    {
        title: t('common.field_user_agent'),
        dataIndex: 'ua',
        key: 'ua',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_client_id'),
        dataIndex: 'clientId',
        key: 'clientId',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_client_name'),
        dataIndex: 'clientName',
        key: 'clientName',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_start_datetime'),
        dataIndex: 'startDatetime',
        key: 'startDatetime',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_last_access_datetime'),
        dataIndex: 'lastAccessDatetime',
        key: 'lastAccessDatetime',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_end_datetime'),
        dataIndex: 'endDatetime',
        key: 'endDatetime',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_success'),
        dataIndex: 'success',
        key: 'success',
        width: 100,
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
        width: 80,
        ellipsis: true,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await onlineUsersListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
// 添加编辑
const entityFormModalTitle = ref<string>('');
const entityFormModalOpen = ref<boolean>(false);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
const entityFormModel = reactive<OnlineUsers>({});
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
        await userSessionDetailsApi({ id: id }).then((result) => {
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
