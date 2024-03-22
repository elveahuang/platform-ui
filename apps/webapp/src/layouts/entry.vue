<template>
    <a-layout class="app-layout">
        <a-layout-header class="app-layout-header">
            <div class="app-layout-header-container">
                <div class="app-layout-logo">
                    <div class="logo">
                        <span>{{ title }}</span>
                    </div>
                </div>
                <div class="app-layout-nav"></div>
                <div class="app-layout-tools">
                    <a-space size="middle">
                        <dark-toggle />
                        <theme-dropdown />
                        <locale-dropdown />
                    </a-space>
                </div>
            </div>
        </a-layout-header>
        <a-layout-content class="app-layout-content">
            <div class="app-layout-content-container">
                <slot />
            </div>
        </a-layout-content>
        <a-layout-footer class="app-layout-footer">
            <div class="app-layout-footer-container">
                <div class="app-text" v-for="(text, index) in copyright" :key="index" v-html="text"></div>
            </div>
        </a-layout-footer>
    </a-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { DarkToggle, LocaleDropdown, ThemeDropdown } from '@commons/webapp/components';
import { settings } from '@/settings';

const title = computed<string>(() => settings.app.getTitle());
const copyright = computed<string[]>(() => settings.app.getCopyright());

onMounted(() => {
    log('Component - <<EntryLayout>> is mounted.');
});
</script>

<style lang="scss" scoped>
@import './entry.scss';
</style>
