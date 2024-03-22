<template>
    <div class="app-page-header">
        <div class="title">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';

onMounted(async () => {
    log('Page <<AppPageHeader>> mounted.');
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
