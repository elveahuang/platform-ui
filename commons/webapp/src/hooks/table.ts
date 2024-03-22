import { R } from '@commons/core/types';
import Page from '@commons/core/types/page';
import { ref, Ref } from 'vue';

export class DataTableOptions {
    columns?: any[];
}

export class DataTablePagination {
    sortBy?: string;
    descending?: boolean;
    page?: number;
    rowsPerPage?: number;
    rowsNumber?: number;
}

export const defaultDataTablePagination: DataTablePagination = {
    sortBy: '',
    descending: false,
    page: 1,
    rowsPerPage: 2,
    rowsNumber: 0,
};

export type DataTable = {
    loading: Ref<boolean>;
    pagination: Ref<DataTablePagination>;
    columns: Ref<any[]>;
    selected: Ref<any[]>;
    rows: Ref<any[]>;
    filter: Ref<string>;
    handlePageResponse: (response: R) => Promise<void>;
    processTableData: (page: Page) => void;
    processTableParams: (pagination: DataTablePagination, filter: string) => Page;
    toggleLoadingStatus: (status: boolean) => void;
};

export function useDataTable(options: DataTableOptions = {}): DataTable {
    const loading = ref(false);
    const pagination = ref(defaultDataTablePagination);
    const columns = ref(options.columns || []);
    const selected = ref([]);
    const rows = ref([]);
    const filter = ref('');
    const handlePageResponse = async (response: R): Promise<void> => {
        const page = response.data as Page;
        rows.value = page.items;
        pagination.value.page = page.page;
        pagination.value.rowsPerPage = page.limit;
        pagination.value.rowsNumber = page.total;
    };
    const processTableData = (page: Page) => {
        rows.value = page.items;
        pagination.value.page = page.page;
        pagination.value.rowsPerPage = page.limit;
        pagination.value.rowsNumber = page.total;
    };
    const processTableParams = (pagination: DataTablePagination, filter: string): Page => {
        return {
            page: pagination.page,
            limit: pagination.rowsPerPage,
            filter: filter,
        };
    };
    const toggleLoadingStatus = (status: boolean) => {
        loading.value = status;
    };
    return {
        loading,
        pagination,
        columns,
        selected,
        rows,
        filter,
        handlePageResponse,
        processTableData,
        processTableParams,
        toggleLoadingStatus,
    };
}
