<template>
    <app-divider />
    <van-cell-group inset class="mt-2">
        <van-cell title="Slide" to="/demo/slider" isLink />
        <van-cell title="Editor" to="/demo/editor" isLink />
        <van-cell title="Player" to="/demo/player" isLink />
    </van-cell-group>
    <app-divider />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { AppDivider } from '@commons/mobile/components';

onMounted(async () => {
    log('Page <<DemoPage>> mounted.');
});
</script>
