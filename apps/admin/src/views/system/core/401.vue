<template>
    <div>
        <a-space>
            <a-button type="primary">Primary</a-button>
            <a-button type="primary" disabled>Primary(disabled)</a-button>
        </a-space>
        <a-button>Primary Button</a-button>
        <div class="text-center">
            <a-space direction="vertical" :size="12">
                <a-date-picker />
                <a-date-picker picker="week" />
                <a-date-picker picker="month" />
                <a-date-picker picker="quarter" />
                <a-date-picker picker="year" />
            </a-space>
        </div>
        <div class="text-center">{{ token.colorPrimary }}</div>
        <div class="text-center">{{ token.colorPrimary }}</div>
    </div>
</template>

<script setup lang="ts">
import { theme } from 'ant-design-vue';

const { token } = theme.useToken();
</script>
