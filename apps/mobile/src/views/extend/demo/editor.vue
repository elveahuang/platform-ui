<template>
    <div class="m-6">
        <app-editor />
    </div>
    <div class="m-6">
        <app-tip-tap-editor />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { AppEditor, AppTipTapEditor } from '@commons/core/components';

onMounted(async () => {
    log('Page <<ShowCaseSliderPage>> mounted.');
});
</script>
