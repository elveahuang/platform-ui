<template>
    <a-menu class="app-menu" mode="inline" theme="light" v-model:open-keys="openKeys" v-model:selected-keys="selectedKeys" style="overflow-y: auto">
        <template v-for="menu in items" :key="menu.key">
            <a-sub-menu v-if="menu.items && menu.items.length && menu.items.length > 0" :key="menu.key">
                <template #title>
                    <app-icon :icon="menu.icon" />
                    <span>{{ menu.title }} </span>
                </template>
                <a-menu-item v-for="subMenu in menu.items" :key="subMenu.path" @click="handleMenuChange(subMenu.path)">
                    {{ subMenu.title }}
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else @click="handleMenuChange(menu.path)" :key="menu.path">
                <app-icon :icon="menu.icon" />
                <span>{{ menu.title }}</span>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script setup lang="ts">
import { AppIcon } from '@commons/webapp/components';
import { useRoute, useRouter } from 'vue-router';
import { log } from '@commons/core/utils';
import { computed } from 'vue';
import { getMenuItems, getMenuOpenKeys } from '@commons/core/utils/menu';
import { menus } from '@/utils/menus';

const route = useRoute();
const router = useRouter();
const items = computed(() => getMenuItems(menus));
const openKeys = ref<string[]>(getMenuOpenKeys(menus, route.path));
const selectedKeys = ref<string[]>([route.path]);
const handleMenuChange = (path: string) => {
    router.push(path);
};

onMounted(() => {
    log('Component - <<SiderMenu>> is mounted.');
});
</script>
