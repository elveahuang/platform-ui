<template>
    <van-sticky>
        <van-nav-bar :title="$t('common.label_settings')" left-arrow @click-left="goBack()" />
    </van-sticky>

    <div class="app-divider"></div>

    <van-cell-group inset>
        <dark-mode-cell-picker />
        <locale-cell-picker />
        <theme-cell-picker />
    </van-cell-group>
</template>

<script setup lang="ts">
import { goBack } from '@commons/core/utils';
import { DarkModeCellPicker, LocaleCellPicker, ThemeCellPicker } from '@commons/mobile/components';
</script>
