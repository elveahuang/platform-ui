<template>
    <div class="editor">
        <tip-tap-menu />
        <editor-content :editor="editor" />
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef, watch } from 'vue';
import { Editor as TipTapEditor, EditorContent } from '@tiptap/vue-3';
import { log } from '@commons/core/utils';
import { isEqual, isNull, merge } from 'lodash-es';
import { getTipTapEditorOptions, TipTapEditorOptions } from '@commons/core/utils/editor';
import { TipTapMenu } from '@commons/core/components/editor/components';

const emits = defineEmits(['update:value']);
const props = defineProps({
    options: {
        type: Object,
        default() {
            return {};
        },
    },
    value: {
        type: String,
        default: '',
    },
});
const editor = shallowRef<TipTapEditor>();
const content = computed<string>(() => props.value);
const initEditor = async (options: TipTapEditorOptions): Promise<void> => {
    const defaultOptions = {
        content: content.value,
        onUpdate: () => {
            emits('update:value', editor.value.getHTML());
        },
    } as TipTapEditorOptions;
    editor.value = new TipTapEditor(getTipTapEditorOptions(merge(defaultOptions, options)));
};
const destroyEditor = async (): Promise<void> => {
    if (!isNull(editor.value)) {
        editor.value.destroy();
    }
};

watch(content, (value: string): void => {
    if (!isNull(editor.value) && !isEqual(editor.value.getHTML(), value)) {
        editor.value.setOptions({ content: value });
    }
});

onMounted(async (): Promise<void> => {
    log('Component <<TipTapEditor>> onMounted.');
    await initEditor(props.options).then();
});

onBeforeUnmount(async (): Promise<void> => {
    log('Component <<TipTapEditor>> onBeforeUnmount.');
    await destroyEditor().then();
});
</script>
