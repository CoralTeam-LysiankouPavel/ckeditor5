import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from "./converter";

export default class AddStyleOnTableInsertPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnTableInsertPlugin';
    }

    init() {
        const editor = this.editor;

        editor.conversion
            .for('dataDowncast')
            .add(
                dispatcher => dispatcher.on('insert:table', modelAttributeToViewStyle),
                { priority: 'low' }
            );
    }
}
