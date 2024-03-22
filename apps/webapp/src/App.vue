<template>
    <a-config-provider :locale="locale" :theme="theme">
        <a-app class="app">
            <router-view />
        </a-app>
    </a-config-provider>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';
import { getAppLocale, getAppTheme, setAppDarkMode, setAppTheme } from '@commons/webapp/utils';
import { Theme } from '@commons/core/utils/theme';
import { Locale } from '@commons/core/utils/locale';

const appStore = useAppStore();
const appLocale = computed<Locale>(() => appStore.locale);
const appTheme = computed<Theme>(() => appStore.theme);
const appDark = computed(() => appStore.dark);

const locale = ref(getAppLocale(appStore.locale));
const theme = computed(() => getAppTheme(appStore.theme, appStore.dark));

// 监听深色模式
watch(
    appDark,
    (value: boolean) => {
        setAppDarkMode(value);
    },
    {
        immediate: true,
    },
);
// 监听主题
watch(
    appTheme,
    (value: Theme) => {
        setAppTheme(value);
    },
    {
        immediate: true,
    },
);
// 监听语言
watch(
    appLocale,
    (value: Locale): void => {
        locale.value = getAppLocale(value);
    },
    {
        immediate: true,
    },
);

onMounted(async (): Promise<void> => {
    log(`Component <<App>> mounted.`);
});
</script>
