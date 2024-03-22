<template>
    <a-select v-model:value="model" :options="items" @change="onChange" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { SelectProps } from 'ant-design-vue';
import { useDark } from '@commons/core/hooks/useDark';
import { DarkMode, darkModes, DarkModeType } from '@commons/core/utils/dark';
import { useAppStore } from '@commons/core/store';

const appStore = useAppStore();
const { setDarkMode } = useDark();
const model: ComputedRef<DarkMode> = computed<DarkMode>(() => appStore.darkMode);
const items = ref<SelectProps['options']>(
    darkModes.map((item: DarkModeType) => {
        return { value: item.mode, label: item.title };
    }),
);
const onChange = async (value: DarkMode): Promise<void> => {
    await setDarkMode(value);
};
</script>
