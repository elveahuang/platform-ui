<template>
    <span role="img" class="anticon">
        <v-icon :width="props.width" :height="props.height" :icon="props.icon" />
    </span>
</template>

<script setup lang="ts">
import { VIcon } from '@commons/core/utils';

const props = defineProps({
    icon: {
        type: String,
        require: true,
        default: '',
    },
    width: {
        type: Number,
        require: false,
        default: null,
    },
    height: {
        type: Number,
        require: false,
        default: null,
    },
});
</script>
