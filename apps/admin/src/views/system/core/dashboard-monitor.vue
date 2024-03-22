<template>
    <div class="text-center">
        <a-card title="displayName" class="m-0 p-0" style="width: 300px" size="small">
            <a-menu class="!border-0">
                <a-menu-item class="border-0">{{ $t('common.label_profile') }}</a-menu-item>
                <a-menu-item class="border-0">{{ $t('common.label_account') }}</a-menu-item>
                <a-menu-divider></a-menu-divider>
                <a-menu-item class="border-0">{{ $t('common.label_logout') }}</a-menu-item>
            </a-menu>
        </a-card>

        <router-link to="/login">
            <a-button type="primary">Primary Button</a-button>
        </router-link>

        <div class="text-center">Module Index Page</div>
        <v-icon icon="mdi:account-circle-outline" />
    </div>
</template>

<script setup lang="ts">
import { VIcon } from '@commons/core/utils';
</script>
