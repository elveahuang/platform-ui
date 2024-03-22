<template>
    <a-button shape="circle" @click="onChange">
        <template #icon>
            <app-icon v-if="model" icon="mdi:weather-night" />
            <app-icon v-else icon="mdi:white-balance-sunny" />
        </template>
    </a-button>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useAppStore } from '@commons/core/store';
import { useDark } from '@commons/core/hooks/useDark';
import { AppIcon } from '@commons/webapp/components';

const appStore = useAppStore();
const { setDark } = useDark();
const model: ComputedRef<boolean> = computed<boolean>(() => appStore.dark);
const onChange = async (): Promise<void> => {
    await setDark(!appStore.dark).then();
};
</script>
