import { useAppStoreExternal } from '@commons/core/store';

export const usePageLoading = () => {
    const appStore = useAppStoreExternal();
    const pageLoadStart = () => {
        appStore.setLoading(true);
    };
    const pageLoadDone = () => {
        appStore.setLoading(false);
    };
    return {
        pageLoadStart,
        pageLoadDone,
    };
};
