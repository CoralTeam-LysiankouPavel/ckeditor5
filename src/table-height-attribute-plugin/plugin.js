/**
 * - Plugin is used to provide functionality to support table `height` attribute.
 * - That's the only attribute, that Microsoft Office Outlook supports.
 */

import { Plugin } from 'ckeditor5/src/core';
import { __modelAttributeToViewStyle } from "./converter";

export const ATTRIBUTE_HEIGHT = 'height';

export default class TableHeightAttributePlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_HEIGHT]
        });

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(`attribute:${ATTRIBUTE_HEIGHT}:table`, __modelAttributeToViewStyle),
                { priority: 'low' }
            );

        // editor.conversion
        //     .for('upcast')
        //     .add(
        //         dispatcher => dispatcher.on('element:table',  __viewStyleToModelAttribute)
        //     );

        editor.commands.get('tableHeight').on(
            'execute',
            (_, args) => {
                editor.model.change(writer => {
                    const options = args[0];

                    const table = editor.model
                        .document
                        .selection
                        .getFirstPosition()
                        .findAncestor('table');

                    if (table !== null) {
                        writer.setAttribute(ATTRIBUTE_HEIGHT, options.value, table);
                    }
                });
            },
            { priority: 'low' }
        );
    }
}
