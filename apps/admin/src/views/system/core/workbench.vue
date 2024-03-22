<template>
    <a-card title="工作台">
        <span>开心每一天</span>
    </a-card>
    <app-divider />

    <a-card title="播放器">
        <div>
            <app-video-player :options="playerOptions" />
        </div>
    </a-card>
    <app-divider />

    <a-card title="编辑器" class="mt-4">
        <div>
            <app-editor />
        </div>
    </a-card>
    <app-divider />
</template>

<script setup lang="ts">
import { AppEditor, AppVideoPlayer } from '@commons/core/components';
import { AppDivider } from '@commons/webapp/components';
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';

const playerOptions = reactive({
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
});

onMounted(async () => {
    log('Page <<Workbench>> mounted.');
});
</script>
