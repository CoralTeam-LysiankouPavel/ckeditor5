/**
 * This plugin is used to provide functionality to add paddings to each table cell.
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from "./converter";

export default class AddPuddingToTableCellPlugin extends Plugin {
    static get pluginName() {
        return 'AddPuddingToTableCellPlugin';
    }

    init() {
        const editor = this.editor;
        const padding = editor.config.get('app.tableCellPadding');

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(
                    'insert:table',
                    (evt, data, conversionApi) => modelAttributeToViewStyle(evt, data, conversionApi, padding)
                ),
                { priority: 'low' }
            );
    }
}
