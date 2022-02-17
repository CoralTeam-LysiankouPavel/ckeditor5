/**
 * Plugin is used to add css styles to all images
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from './converter';

export default class AddStyleOnImageInsertPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnImageInsertPlugin';
    }

    init() {
        const editor = this.editor;

        editor.conversion
            .for('dataDowncast')
            .add(
                dispatcher => dispatcher.on('insert:image', modelAttributeToViewStyle),
                { priority: 'low' }
            );
    }
}
