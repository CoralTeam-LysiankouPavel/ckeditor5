/**
 * - Plugin is used to provide functionality to support table align.
 *
 * - Currently setting table align is possible only programmatically,
 *   there is no way to set|change table align through UI
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle, viewStyleToModelAttribute } from "./converter";

export const ATTRIBUTE_ALIGN = 'align';

export default class TableAlignPlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_ALIGN]
        });

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(`attribute:${ATTRIBUTE_ALIGN}:table`, modelAttributeToViewStyle),
                { priority: 'low' }
            );

        editor.conversion
            .for('upcast')
            .add(dispatcher => dispatcher.on('element:table',  viewStyleToModelAttribute));

        editor.commands.get('insertTable').on('execute', (evt, args) => {
            editor.model.change(writer => {
                const options = args[0];
                let tableAlign = options.align;

                if (tableAlign === undefined) {
                    tableAlign = 'center';
                }

                const table = editor.model
                    .document
                    .selection
                    .getFirstPosition()
                    .findAncestor('table');

                if (table !== null) {
                    writer.setAttribute(ATTRIBUTE_ALIGN, tableAlign, table);
                }
            });
        }, { priority: 'low' });
    }
}
