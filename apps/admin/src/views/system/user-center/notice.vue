<template>
    <a-card shadow="never">
        <template #title>
            <div>{{ $t('common.user_pages_change_password_title') }}</div>
        </template>
        <div class="pb-4">
            <a-space>
                <a-button @click="dataTableSelectionEnabled = !dataTableSelectionEnabled">
                    {{ dataTableSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
            </a-space>
        </div>
        <data-table ref="dataTableRef" v-model:model="dataTableModel" @getDataList="getDataList" :row-selection-enabled="dataTableSelectionEnabled">
            <template #bodyCell="{ column }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-popconfirm :title="$t('common.label_confirm_delete_record')">
                            <a-button danger type="primary">{{ $t('common.button_delete') }}</a-button>
                        </a-popconfirm>
                    </a-space>
                </template>
            </template>
        </data-table>
    </a-card>
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table';
import { onMounted, reactive } from 'vue';
import { log } from '@commons/core/utils';
import { DataTable } from '@commons/webapp/components';
import { useI18n } from 'vue-i18n';
import { noticeListApi } from '@commons/core/api/home/notice';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
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
const dataTableSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await noticeListApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};

onMounted(async () => {
    log('Page <<UserCenterNoticePage>> mounted.');
});
</script>
