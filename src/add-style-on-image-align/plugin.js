/**
 * Plugin is used to add css styles on image align
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from './converter';

export default class AddStyleOnImageAlignPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnImageAlignPlugin';
    }

    init() {
        const editor = this.editor;

        editor.conversion
            .for('dataDowncast')
            .add(
                dispatcher => dispatcher.on('attribute:imageStyle', modelAttributeToViewStyle),
                { priority: 'low' }
            );
    }
}
