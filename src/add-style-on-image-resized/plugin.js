/**
 * Plugin is used to add/remove "width" attribute of resized "<img>" element
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from './converter';

export default class AddStyleOnImageResizedPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnImageResizedPlugin';
    }

    init() {
        const editor = this.editor;

        editor.conversion
            .for('dataDowncast')
            .add(
                dispatcher => dispatcher.on('attribute:width:image', modelAttributeToViewStyle),
                { priority: 'low' }
            );

        editor.conversion.for( 'upcast' )
            .attributeToAttribute( {
                view: {
                    name: 'p',
                    styles: {
                        width: /.+/
                    }
                },
                model: {
                    key: 'width',
                    value: viewElement => viewElement.getStyle( 'width' )
                }
            } );
    }
}
