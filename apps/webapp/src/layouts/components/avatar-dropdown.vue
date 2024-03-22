<template>
    <a-dropdown placement="bottomRight">
        <a-button shape="circle">
            <template #icon>
                <app-icon icon="mdi:account-outline" />
            </template>
        </a-button>
        <template #overlay>
            <a-menu style="width: 250px">
                <a-menu-item-group v-if="isAuthenticated">
                    <span class="!my-2 inline-block">{{ user.displayName }}</span>
                </a-menu-item-group>
                <a-menu-divider></a-menu-divider>
                <a-menu-item class="!p-2" @click="router.push('/user-center')">
                    <app-icon icon="mdi:account-circle-outline" />
                    <span class="ml-2">{{ $t('common.label_user_center') }}</span>
                </a-menu-item>
                <a-menu-item class="!p-2">
                    <app-icon icon="mdi:account-cog-outline" />
                    <span class="ml-2">{{ $t('common.label_account') }}</span>
                </a-menu-item>
                <a-menu-item class="!p-2">
                    <app-icon icon="mdi:lock-minus-outline" />
                    <span class="ml-2">{{ $t('common.label_change_password') }}</span>
                </a-menu-item>
                <a-menu-divider></a-menu-divider>
                <a-menu-item class="!p-2" @click="handleLogout">
                    <app-icon icon="mdi:logout" />
                    <span class="ml-2">{{ $t('common.label_logout') }}</span>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import { settings } from '@/settings';
import { AppIcon } from '@commons/webapp/components';
import { useUserStore } from '@commons/core/store';
import { useRouter } from 'vue-router';
import { log } from '@commons/core/utils';

const router = useRouter();
const { isAuthenticated, user, logout } = useUserStore();
const handleLogout = () => {
    logout().then(() => {
        router.push(settings.app.getLogoutSuccessUrl());
    });
};

onMounted(() => {
    log('Component - <<AvatarDropdown>> is mounted.');
});
</script>
