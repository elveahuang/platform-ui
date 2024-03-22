<template>
    <a-dropdown placement="bottomRight">
        <a-button shape="circle">
            <template #icon>
                <app-icon icon="mdi:translate" />
            </template>
        </a-button>
        <template #overlay>
            <a-menu selectable>
                <a-menu-item v-for="i in items" v-bind:key="i.locale" @click="onChange(i.locale)">{{ i.title }}</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Locale, locales } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks/useLocale';
import { AppIcon } from '@commons/webapp/components';

const { setLocale } = useLocale();
const items = ref(locales);
const onChange = async (value: Locale): Promise<void> => {
    await setLocale(value).then();
};
</script>
