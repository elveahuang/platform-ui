<template>
    <div class="editor-menu">
        <div>
            <template v-for="(item, index) in items" :key="index">
                <tip-tap-menu-item v-bind="item" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import { onMounted, reactive } from 'vue';
import { log } from '@commons/core/utils';
import { TipTapMenuItem } from '@commons/core/components/editor/components';

const props = defineProps({
    editor: {
        type: Editor,
        default: null,
    },
});
const items = reactive([
    {
        icon: 'bold',
        title: 'Bold',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold'),
    },
    {
        icon: 'italic',
        title: 'Italic',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic'),
    },
]);
const initEditorMenu = async (): Promise<void> => {};

onMounted(async () => {
    log('Component <<TipTapEditor>> mounted.');
    await initEditorMenu().then();
});
</script>
