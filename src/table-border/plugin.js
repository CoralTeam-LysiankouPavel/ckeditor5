/**
 * - Plugin is used to provide functionality to support table width.
 *
 * - Currently setting table width is possible only programmatically,
 *   there is no functionality to change table width through UI
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from "./converter";

export const ATTRIBUTE_WIDTH = 'width';

export default class TableWidthPlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_WIDTH]
        });

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on('attribute:width:table', modelAttributeToViewStyle),
                { priority: 'low' }
            );

        editor.conversion
            .for( 'upcast' )
            .attributeToAttribute({
                view: 'width',
                model: 'width',
                converterPriority: 'low'
            });

        editor.commands.get('insertTable').on('execute', (evt, args) => {
            editor.model.change(writer => {
                const options = args[0];

                if (options.width === undefined) {
                    return;
                }

                const table = editor.model
                    .document
                    .selection
                    .getFirstPosition()
                    .findAncestor('table');

                if (table !== null) {
                    writer.setAttribute('width', options.width, table);
                }
            });
        }, { priority: 'low' });
    }
}
