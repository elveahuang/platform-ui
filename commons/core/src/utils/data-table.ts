import { Key, PageRequestParams, PageResult, R } from '@commons/core/types';
import { isEmpty, isFunction, toNumber } from 'lodash-es';

export class DataTableState {
    tableSelectedRowKeys: Key[];
    tableSelectedRows: [];
}

export class DataTable {
    loading: boolean = false;
    finished: boolean = false;
    pagination: {
        page: number;
        size: number;
        total: number | string;
    } = {
        page: 1,
        size: 10,
        total: 0,
    };
    sort: {
        property?: string;
        order?: string;
    } = {
        property: '',
        order: '',
    };
    columns: any[] = [];
    items: any[] = [];
}

export const initialize = (
    columns: any[] = [],
    pagination: { page: number; size: number } = {
        page: 1,
        size: 10,
    },
): DataTable => {
    const table: DataTable = new DataTable();
    if (!isEmpty(columns)) {
        table.columns = columns;
    }
    if (pagination.page > 0) {
        table.pagination.page = pagination.page;
    }
    if (pagination.size > 0) {
        table.pagination.size = pagination.size;
    }
    return table;
};

export const handleResult = <T>(dataTable: DataTable, result: R<PageResult<T>>, callback?: Function): DataTable => {
    if (result?.data?.content.length) {
        dataTable.items = [];
        for (const item of result.data.content) {
            if (callback && isFunction(callback)) {
                dataTable.items.push(callback(item));
            } else {
                dataTable.items.push(item);
            }
        }
    } else {
        dataTable.items = [];
    }
    dataTable.pagination.page = result?.data?.pageable?.pageNumber + 1;
    dataTable.pagination.size = result?.data?.pageable?.pageSize;
    dataTable.pagination.total = toNumber(result?.data?.totalElements);
    dataTable.loading = false;
    if (result?.data?.last) {
        dataTable.finished = true;
    }
    return dataTable;
};

export const handleParams = (dataTable: DataTable): PageRequestParams => {
    dataTable.loading = true;
    return {
        page: dataTable.pagination.page <= 1 ? 1 : dataTable.pagination.page,
        size: dataTable.pagination.size,
        sort: dataTable.sort.property,
        order: dataTable.sort.order,
    };
};

export const useDataTable = () => {
    return {
        initialize: initialize,
        handleResult: handleResult,
        handleParams: handleParams,
    };
};
