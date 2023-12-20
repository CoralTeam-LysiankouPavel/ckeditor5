import { Plugin } from 'ckeditor5/src/core';

export const ATTRIBUTE_BORDER = 'border';

export default class AddStyleOnTableInsertPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnTableInsertPlugin';
    }

    init() {
        const editor = this.editor;

        editor.commands.get('insertTable').on(
            'execute',
            (_) => {
                editor.model.change(writer => {

                    const table = editor.model
                        .document
                        .selection
                        .getFirstPosition()
                        .findAncestor('table');

                    if (table !== null) {
                        writer.setAttribute(ATTRIBUTE_BORDER, '1px solid black', table);
                    }
                });
            },
            { priority: 'low' }
        );
    }
}
