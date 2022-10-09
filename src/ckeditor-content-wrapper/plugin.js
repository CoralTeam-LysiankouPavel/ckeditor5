/**
 * - Purpose/Goal: to wrap CKEditor content and limit its width
 *
 *
 * - Plugin config:
 *   ------------------------------------------------------------------------------------------------------------
 *   |   Option description               |   Config path                                                       |
 *   ------------------------------------------------------------------------------------------------------------
 *   |   to enable plugin                 |   editor.config.app.CKEditorContentWrapper.enabled = bool value;           |
 *   ------------------------------------------------------------------------------------------------------------
 *   |   to set container width           |   editor.config.app.CKEditorContentWrapper.containerWidth = string value   |
 *   ------------------------------------------------------------------------------------------------------------
 *   |   to set container border width    |   editor.config.app.CKEditorContentWrapper.borderWidth = int value         |
 *   ------------------------------------------------------------------------------------------------------------
 *   |   to set container border style    |   editor.config.app.CKEditorContentWrapper.borderStyle = string value      |
 *   ------------------------------------------------------------------------------------------------------------
 *   |   to set container border color    |   editor.config.app.CKEditorContentWrapper.borderColor = hex value         |
 *   ------------------------------------------------------------------------------------------------------------
 */

import { Plugin } from 'ckeditor5/src/core';

export default class CKEditorContentWrapperPlugin extends Plugin {
    init() {
        const editor = this.editor;

        if (CKEditorContentWrapperPlugin.#pluginEnabled(editor.config)) {
            this.#addOnReadyListeners(editor);
            this.#addOnDeleteContentListeners(editor);
        }
    }

    #addOnReadyListeners(editor) {
        editor.on('ready', () => {
            if (editor.data.get().length === 0) {
                editor.execute('insertTable', { rows: 1, columns: 1 });
                editor.execute('tableBorderWidth', { value: CKEditorContentWrapperPlugin.#getBorderWidth(editor.config) });
                editor.execute('tableBorderStyle', { value: CKEditorContentWrapperPlugin.#getBorderStyle(editor.config) });
                editor.execute('tableBorderColor', { value: CKEditorContentWrapperPlugin.#getBorderColor(editor.config) });

                // the next 'resizeTableWidth' command can be executed only if the whole table is selected
                editor.execute('selectAll');
                editor.execute('resizeTableWidth', { tableWidth: CKEditorContentWrapperPlugin.#getContainerWidth(editor.config) });

                editor.model.change(writer => {
                    const root = editor.model.document.getRoot()
                    const position = writer.createPositionFromPath(root, [0, 0, 0, 0, 0]); // at the beginning of table
                    writer.setSelection(position);
                });
            }
        }, { priority: 'highest' });
    }

    #addOnDeleteContentListeners(editor) {
        editor.model.on('deleteContent', () => {
            const root = editor.model.document.getRoot()

            if (root.childCount !== 1 || root.getChild(0).name !== 'table') {
                editor.execute('undo');
            }
        });
    }

    static #pluginEnabled(editorConfig) {
        return editorConfig.get('app.CKEditorContentWrapper.enabled');
    }

    static #getContainerWidth(editorConfig) {
        return editorConfig.get('app.CKEditorContentWrapper.containerWidth');
    }

    static #getBorderWidth(editorConfig) {
        return editorConfig.get('app.CKEditorContentWrapper.borderWidth');
    }

    static #getBorderStyle(editorConfig) {
        return editorConfig.get('app.CKEditorContentWrapper.borderStyle');
    }

    static #getBorderColor(editorConfig) {
        return editorConfig.get('app.CKEditorContentWrapper.borderColor');
    }
}
