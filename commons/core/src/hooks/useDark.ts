import { useAppStoreExternal } from '@commons/core/store';
import { DarkMode, getDarkValue } from '@commons/core/utils/dark.ts';

const setDark = async (dark: boolean): Promise<void> => {
    const appStore = useAppStoreExternal();
    appStore.setDark(dark);
};

const setDarkMode = async (mode: DarkMode): Promise<void> => {
    const appStore = useAppStoreExternal();
    appStore.setDarkMode(mode);
    appStore.setDark(getDarkValue(mode));
};

export const useDark = (): {
    setDark: (dark: boolean) => Promise<void>;
    setDarkMode: (darkMode: DarkMode) => Promise<void>;
} => {
    return {
        setDark,
        setDarkMode,
    };
};
