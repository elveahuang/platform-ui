<template>
    <div>
        <div class="text-center">{{ $t('common.label_about') }}</div>
        <div class="text-center">
            <a-image width="9.375rem" :src="logo"></a-image>
        </div>
        <div class="text-center">{{ title }}</div>
        <div class="text-center">{{ version }}</div>
        <div class="text-center">
            <p class="app-text" v-for="(text, index) in copyright" :key="index" v-html="text"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { settings } from '@/settings';

const title = ref(settings.app.getTitle());
const version = ref(settings.app.getVersion());
const logo = ref(settings.app.getLogo());
const copyright = ref<string[]>(settings.app.getCopyright());

onMounted(async () => {
    log('Page <<About>> mounted.');
});
</script>
