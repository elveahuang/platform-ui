import { useAppStoreExternal } from '@commons/core/store';
import { Theme } from '@commons/core/utils/theme.ts';

const setTheme = async (theme: Theme): Promise<void> => {
    const appStore = useAppStoreExternal();
    appStore.setTheme(theme);
};

export const useTheme = (): { setTheme: (theme: Theme) => Promise<void> } => {
    return {
        setTheme: setTheme,
    };
};
