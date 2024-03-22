<template>
    <a-page-header :title="$t('common.user_management')" />

    <a-card>
        <data-table
            ref="dataTableRef"
            v-model:model="dataTableModel"
            @getDataList="getDataList"
            :row-selection-enabled="dataTableRowSelectionEnabled"
            :tool-bar-enabled="true"
        >
            <template #toolBar>
                <a-button type="primary" @click="showAddUserModal">{{ $t('common.button_add') }}</a-button>
                <a-button @click="dataTableRowSelectionEnabled = !dataTableRowSelectionEnabled">
                    {{ dataTableRowSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
                <a-button @click="handleDelete(0)">{{ $t('common.button_delete') }}</a-button>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-button shape="circle" @click="showEditUserModal(record.id)">
                            <template #icon>
                                <app-icon icon="ant-design:edit-outlined" />
                            </template>
                        </a-button>
                        <a-button shape="circle" @click="showResetPasswordModal(record.id)">
                            <template #icon>
                                <app-icon icon="ant-design:lock-outlined" />
                            </template>
                        </a-button>
                        <a-popconfirm :title="$t('common.label_confirm_delete_record')" @confirm="handleDelete(record.id)">
                            <a-button shape="circle" @confirm="handleDelete(record.id)">
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
    <!-- 编辑用户 -->
    <edit-user v-model:show="editUserFormModalOpen" v-model:value="editUserFormModalValue" @onSuccess="getDataList" />
    <!-- 修改密码面板 -->
    <reset-password v-model:show="resetPasswordFormModalOpen" v-model:value="resetPasswordFormModalValue" />
    <!-- 添加用户 -->
    <add-user v-model:show="addUserFormModalOpen" @onSuccess="getDataList" />
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table';
import { userDeleteApi, userListApi } from '@commons/core/api/admin/user';
import { onMounted, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import { AppIcon, DataTable } from '@commons/webapp/components';
import { useI18n } from 'vue-i18n';
import { Key } from '@commons/core/types';
import { isEmpty } from 'lodash-es';
import { showMessage } from '@commons/webapp/utils';
import { AddUser, EditUser, ResetPassword } from '@/views/system/user/components';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
    {
        title: t('common.user_field_username'),
        dataIndex: 'username',
        key: 'username',
        width: 100,
        ellipsis: true,
        fixed: 'left',
    },
    {
        title: t('common.user_field_nickname'),
        dataIndex: 'displayName',
        key: 'displayName',
        width: 100,
        ellipsis: true,
        fixed: 'left',
    },
    {
        title: t('common.user_field_sex'),
        dataIndex: 'sex',
        key: 'sex',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.user_field_birthday'),
        dataIndex: 'birthday',
        key: 'birthday',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_description'),
        dataIndex: 'description',
        key: 'description',
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.field_last_modified_at'),
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        sorter: true,
        width: 100,
        ellipsis: true,
    },
    {
        title: t('common.label_action'),
        dataIndex: 'operation',
        key: 'operation',
        width: 68,
        ellipsis: true,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await userListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
// 添加用户
const addUserFormModalOpen = ref<boolean>(false);
const showAddUserModal = () => {
    addUserFormModalOpen.value = true;
};
// 编辑用户
const editUserFormModalOpen = ref<boolean>(false);
const editUserFormModalValue = ref<string>('0');
const showEditUserModal = (id: string | number) => {
    editUserFormModalOpen.value = true;
    editUserFormModalValue.value = id as string;
};
// 重置密码
const resetPasswordFormModalOpen = ref<boolean>(false);
const resetPasswordFormModalValue = ref<string>('0');
const showResetPasswordModal = (id: string | number) => {
    resetPasswordFormModalOpen.value = true;
    resetPasswordFormModalValue.value = id as string;
};
// 删除
const handleDelete = async (id: number = 0) => {
    const ids: Key[] = id > 0 ? [id] : dataTableRef.value.selectedRowKeys();
    if (isEmpty(ids)) {
        showMessage({ message: t('common.label_please_select_one_record') }).then();
        return;
    }
    userDeleteApi({ ids: ids }).then((result) => {
        if (result.code == '200') {
            dataTableRef.value.refresh();
        }
    });
};

onMounted(async () => {
    log('Page <<UserAdminListPage>> mounted.');
});
</script>
