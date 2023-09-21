/**
 * - Plugin is used to provide functionality to support table `align` attribute.
 * - That's the only attribute, that Microsoft Office Outlook supports.
 */

import { Plugin } from 'ckeditor5/src/core';
import { __modelAttributeToViewStyle } from "./converter";

export const ATTRIBUTE_ALIGN = 'align';

export default class TableAlignAttributePlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {
            allowAttributes: [ATTRIBUTE_ALIGN]
        });

        editor.commands.get('insertTable').on(
            'execute',
            () => this.__setAlignAttribute('center'),
            { priority: 'low' }
        );

        editor.commands.get('tableAlignment').on(
            'execute',
            (_, args) => this.__setAlignAttribute(args[0].value),
            { priority: 'low' }
        );

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(`attribute:${ATTRIBUTE_ALIGN}:table`, __modelAttributeToViewStyle),
                { priority: 'low' }
            );

        // editor.conversion
        //     .for('upcast')
        //     .add(dispatcher => dispatcher.on('element:table',  viewStyleToModelAttribute));
    }

    __setAlignAttribute(attributeValue) {
        const editor = this.editor;

        editor.model.change(writer => {
            const table = editor.model
                .document
                .selection
                .getFirstPosition()
                .findAncestor('table');

            if (table !== null) {
                writer.setAttribute(ATTRIBUTE_ALIGN, attributeValue, table);
            }
        });
    }
}
