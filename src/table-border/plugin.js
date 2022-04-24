/**
 * - Plugin is used to provide functionality to support table border.
 *
 * - Currently setting table border is possible only programmatically,
 *   there is no way to set|change table border through UI
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle, viewStyleToModelAttribute } from "./converter";

export const ATTRIBUTE_BORDER = 'border';

export default class TableBorderPlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_BORDER]
        });

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(`attribute:${ATTRIBUTE_BORDER}:table`, modelAttributeToViewStyle),
                { priority: 'low' }
            );

        editor.conversion
            .for('upcast')
            .add( dispatcher =>
                dispatcher.on('element:table', viewStyleToModelAttribute),
                { priority: 'low' }
            );

        editor.commands.get('insertTable').on('execute', (evt, args) => {
            editor.model.change(writer => {
                const options = args[0];

                if (options.border === undefined) {
                    return;
                }

                const table = editor.model
                    .document
                    .selection
                    .getFirstPosition()
                    .findAncestor('table');

                if (table !== null) {
                    writer.setAttribute(ATTRIBUTE_BORDER, options.border, table);
                }
            });
        }, { priority: 'low' });
    }
}
