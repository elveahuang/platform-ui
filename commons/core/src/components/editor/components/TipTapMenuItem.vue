<template>
    <a>{{ title }}</a>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    action: {
        type: Function,
        required: true,
        default: () => {},
    },
    isActive: {
        type: Function,
        default: () => {},
    },
});
</script>
