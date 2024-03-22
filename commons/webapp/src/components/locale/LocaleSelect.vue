<template>
    <a-select v-model:value="model" :options="options" @change="onChange" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { SelectProps } from 'ant-design-vue';
import { useAppStore } from '@commons/core/store';
import { Locale, locales, LocaleType } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks/useLocale';

const appStore = useAppStore();
const { setLocale } = useLocale();
const model: ComputedRef<Locale> = computed<Locale>(() => appStore.locale);
const options = ref<SelectProps['options']>(
    locales.map((item: LocaleType) => {
        return { value: item.locale, label: item.title };
    }),
);
const onChange = async (value: Locale): Promise<void> => {
    await setLocale(value).then();
};
</script>
