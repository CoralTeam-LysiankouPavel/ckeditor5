/**
 * - Plugin is used to provide functionality to support table `width` attribute.
 * - That's the only attribute, that Microsoft Office Outlook supports.
 */

import { Plugin } from 'ckeditor5/src/core';
import { __modelAttributeToViewStyle } from "./converter";

export const ATTRIBUTE_WIDTH = 'width';

export default class TableWidthAttributePlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_WIDTH]
        });

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(`attribute:${ATTRIBUTE_WIDTH}:table`, __modelAttributeToViewStyle),
                { priority: 'low' }
            );

        // editor.conversion
        //     .for('upcast')
        //     .add(
        //         dispatcher => dispatcher.on('element:table',  __viewStyleToModelAttribute)
        //     );

        editor.commands.get('tableWidth').on(
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
                        writer.setAttribute(ATTRIBUTE_WIDTH, options.value, table);
                    }
                });
            },
            { priority: 'low' }
        );
    }
}
