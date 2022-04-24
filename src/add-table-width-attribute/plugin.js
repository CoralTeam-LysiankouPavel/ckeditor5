import { Plugin } from 'ckeditor5/src/core';
import { findOptimalInsertionPosition } from 'ckeditor5/src/widget';

export default class AddWidthToTablePlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.commands.get('insertTable').on('execute', (evt, args) => {
            const model = this.editor.model;
            const selection = model.document.selection;
            const tableUtils = this.editor.plugins.get('TableUtils');

            const insertPosition = findOptimalInsertionPosition(selection, model);

            model.change(writer => {
                const options = args[0];
                const table = tableUtils.createTable(writer, options);

                console.log('worked !');
                console.log(options);
                if (options.width !== undefined) {
                    console.log('width', options.width);
                    writer.setAttribute('width', options.width, table);
                }

                model.insertContent(table, insertPosition);
                writer.setSelection(writer.createPositionAt(table.getNodeByPath([0, 0, 0]), 0));
            });
            evt.stop();
        }, { priority: 'high'});
    }
}