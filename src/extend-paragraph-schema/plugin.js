import { Plugin } from 'ckeditor5/src/core';

export default class ExtendParagraphSchemaPlugin extends Plugin {
    static get pluginName() {
        return 'ExtendParagraphSchemaPlugin';
    }

    init() {
        const editor = this.editor;

        editor.model.schema.extend('paragraph', {
            allowAttributes: 'blockIndent'
        });
    }
}
