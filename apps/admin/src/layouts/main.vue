<template>
    <a-layout class="app-layout">
        <a-layout-header class="app-layout-header">
            <div class="app-layout-header-container">
                <div class="app-layout-trigger">
                    <app-icon
                        :width="32"
                        :height="32"
                        icon="ant-design:menu-fold-outlined"
                        class="trigger"
                        v-if="siderCollapsed"
                        @click="() => toggleSidebar()"
                    />
                    <app-icon :width="32" :height="32" icon="ant-design:menu-unfold-outlined" class="trigger" v-else @click="() => toggleSidebar()" />
                </div>
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
                        <app-avatar-dropdown />
                    </a-space>
                </div>
            </div>
        </a-layout-header>

        <a-layout class="app-layout-container">
            <a-layout-sider :trigger="null" collapsible v-model:collapsed="siderCollapsed" :class="siderClassName" :collapsedWidth="64">
                <app-sider-menu />
            </a-layout-sider>
            <a-layout-content :class="contentClassName">
                <div class="app-layout-content-container">
                    <router-view />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useAppStore } from '@commons/core/store';
import { log } from '@commons/core/utils';
import { AppIcon, DarkToggle, LocaleDropdown, ThemeDropdown } from '@commons/webapp/components';
import { AppAvatarDropdown, AppSiderMenu } from '@/layouts/components';
import { settings } from '@/settings';

const { sidebar, toggleSidebar } = useAppStore();
const siderCollapsed = computed(() => sidebar.collapsed);
const siderClassName = computed(() => (sidebar.collapsed ? 'app-layout-sider collapsed' : 'app-layout-sider'));
const contentClassName = computed(() => (sidebar.collapsed ? 'app-layout-content collapsed' : 'app-layout-content'));
const title = computed<string>(() => settings.app.getTitle());

onMounted(() => {
    log('Component - <<MainLayout>> is mounted.');
});
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>
