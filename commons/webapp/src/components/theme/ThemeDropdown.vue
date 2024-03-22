<template>
    <a-dropdown placement="bottomRight">
        <a-button shape="circle">
            <template #icon>
                <app-icon icon="ant-design:skin-outlined" />
            </template>
        </a-button>
        <template #overlay>
            <a-menu>
                <a-menu-item v-for="i in items" v-bind:key="i.theme">
                    <span class="theme" :style="{ backgroundColor: i.primaryColor }" @click="onChange(i.theme)"></span>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Theme, themes } from '@commons/core/utils/theme';
import { useTheme } from '@commons/core/hooks/useTheme';
import { AppIcon } from '@commons/webapp/components';

const { setTheme } = useTheme();
const items = ref(themes);
const onChange = async (value: Theme): Promise<void> => {
    await setTheme(value).then();
};
</script>
<style lang="postcss" scoped>
.theme {
    @apply inline-block;

    width: 120px;
    height: 16px;
}
</style>
