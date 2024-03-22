<template>
    <div class="editor">
        <div class="ai-editor" ref="editorRef" />
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
import { AiEditor, AiEditorOptions } from 'aieditor';
import { log } from '@commons/core/utils';
import { isEqual, isNull, merge } from 'lodash-es';
import { useAppStore } from '@commons/core/store';
import { Locale } from '@commons/core/utils/locale';
import { getEditorOptions } from '@commons/core/utils/editor';
import 'aieditor/dist/style.css';

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
const { locale } = useAppStore();
const appLocale = computed<Locale>(() => locale);
const editorRef = ref();
const content = computed<string>(() => props.value);
const editor = shallowRef<AiEditor>();
const initEditor = async (options: AiEditorOptions): Promise<void> => {
    const defaultOptions = {
        element: editorRef.value as Element,
        content: content.value,
        onChange: (aiEditor: AiEditor) => {
            emits('update:value', aiEditor.getHtml());
        },
    } as AiEditorOptions;
    editor.value = new AiEditor(getEditorOptions(merge(defaultOptions, options)));
};
const destroyEditor = async (): Promise<void> => {
    if (!isNull(editor.value)) {
        editor.value.destroy();
    }
};

watch(content, (value: string): void => {
    if (!isNull(editor.value) && !isEqual(editor.value.getHtml(), value)) {
        editor.value.clear();
        editor.value.focus().insert(value);
    }
});

watch(appLocale, (value: Locale): void => {
    editor.value.changeLang(value === Locale.ZH_CN ? 'zh' : 'en');
});

onMounted(async (): Promise<void> => {
    log('Component <<AiEditor>> mounted.');
    await initEditor(props.options as AiEditorOptions).then();
});

onBeforeUnmount(async (): Promise<void> => {
    log('Component <<AiEditor>> onBeforeUnmount.');
    await destroyEditor().then();
});
</script>
