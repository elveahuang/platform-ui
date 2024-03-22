<template>
    <div class="tool-bar pb-4" v-show="toolBarEnabled">
        <a-space>
            <slot name="toolBar" />
        </a-space>
    </div>
    <a-table
        ref="tableRef"
        :size="size"
        :loading="table.loading"
        :columns="table.columns"
        :data-source="table.items"
        :pagination="tablePagination"
        :row-selection="tableRowSelection"
        :row-key="rowKey"
        @change="onTableChange"
        bordered
        :scroll="{ x: 1300, y: 1000 }"
        @resizeColumn="handleResizeColumn"
    >
        <template #bodyCell="{ column, text, record }">
            <slot name="bodyCell" :column="column" :text="text" :record="record" />
        </template>
        <template #headerCell="{ column, text, record }">
            <slot name="headerCell" :column="column" :text="text" :record="record" />
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { log } from '@commons/core/utils';
import { Key } from '@commons/core/types';
import { DataTable, DataTableState, initialize } from '@commons/core/utils/data-table';
import { snakeCase } from 'lodash-es';

const emits = defineEmits(['getDataList']);
const props = defineProps({
    model: {
        type: DataTable,
        require: false,
        default: () => initialize(),
    },
    /* 是否显示工具栏 */
    toolBarEnabled: {
        type: Boolean,
        require: false,
        default: false,
    },
    rowSelectionEnabled: {
        type: Boolean,
        require: false,
        default: false,
    },
    rowSelectionMultipleEnabled: {
        type: Boolean,
        require: false,
        default: true,
    },
    rowSelection: {
        type: Object,
        require: false,
        default: null,
    },
    rowKey: {
        type: String,
        require: false,
        default: 'id',
    },
    size: {
        type: String,
        require: false,
        default: 'small',
    },
});
function handleResizeColumn(w: any, col: any) {
    col.width = w;
}
const table = reactive<DataTable>(props.model);
const tableState = reactive<DataTableState>({
    tableSelectedRowKeys: [],
    tableSelectedRows: [],
});
const tableRef = ref<any>();
const tablePagination = computed(() => {
    return {
        showSizeChanger: false,
        defaultPageSize: 10,
        pageSize: table.pagination.size,
        current: table.pagination.page,
        total: table.pagination.total as number,
    };
});
const tableRowSelection = computed(() => {
    if (props.rowSelectionEnabled) {
        if (props.rowSelection) {
            return props.rowSelection;
        } else {
            return {
                type: props.rowSelectionMultipleEnabled ? 'checkbox' : 'radio',
                onChange: (selectedRowKeys: Key[], selectedRows: []) => {
                    tableState.tableSelectedRowKeys = selectedRowKeys;
                    tableState.tableSelectedRows = selectedRows;
                },
                getCheckboxProps: (record: any) => ({
                    id: record[props.rowKey],
                }),
            };
        }
    } else {
        return null;
    }
});
const onTableChange = (page: { pageSize: number; current: number }, filters: any, sorter: any) => {
    table.pagination.size = page.pageSize;
    table.pagination.page = page.current;
    if (sorter) {
        table.sort.property = snakeCase(sorter.field);
        table.sort.order = sorter.order === 'ascend' ? 'asc' : 'desc';
    }
    emits('getDataList');
};
const refresh = async (): Promise<void> => {
    table.pagination.page = 1;
    emits('getDataList');
};
const selectedRowKeys = () => {
    return Array.from(tableState.tableSelectedRowKeys);
};
const selectedRows = () => {
    return Array.from(tableState.tableSelectedRows);
};

defineExpose({
    refresh,
    selectedRowKeys,
    selectedRows,
});

onMounted(async () => {
    log('Component <<DataTable>> mounted.');
    emits('getDataList');
});
</script>
