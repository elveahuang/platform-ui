import { StarterKit } from '@tiptap/starter-kit';
import { AiEditorOptions } from 'aieditor';
import { merge } from 'lodash-es';

/**
 * ========================================================================================================================
 * AiEditor
 * ========================================================================================================================
 */

export const defaultToolbarKeys: string[] = [
    'undo',
    'redo',
    'brush',
    'eraser',
    '|',
    'heading',
    'font-family',
    'font-size',
    '|',
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'code',
    'subscript',
    'superscript',
    'hr',
    'todo',
    'emoji',
    '|',
    'highlight',
    'font-color',
    '|',
    'align',
    'line-height',
    '|',
    'bullet-list',
    'ordered-list',
    'indent-decrease',
    'indent-increase',
    'break',
    '|',
    'quote',
    'code-block',
    'table',
];

export const getEditorToolbarKeys = (): string[] => {
    return defaultToolbarKeys;
};

export const defaultEditorOptions: AiEditorOptions = {
    element: '',
    content: '',
    toolbarKeys: getEditorToolbarKeys(),
};

export const getEditorOptions = (options: AiEditorOptions): AiEditorOptions => {
    return merge(defaultEditorOptions, options);
};

/**
 * ========================================================================================================================
 * TipTap
 * ========================================================================================================================
 */

declare type TipTapEditorOptions = {};

export { TipTapEditorOptions };

export const defaultTipTapEditorOptions: TipTapEditorOptions = {
    content: '',
    extensions: [StarterKit],
};

export const getTipTapEditorOptions = (options: TipTapEditorOptions = {}): TipTapEditorOptions => {
    return merge(defaultTipTapEditorOptions, options);
};
