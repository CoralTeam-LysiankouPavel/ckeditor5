/**
 * This plugin is used to provide functionality to add border to each table cell.
 */

import { Plugin } from 'ckeditor5/src/core';
import { modelAttributeToViewStyle } from "./converter";

export default class AddBorderToTableCellPlugin extends Plugin {
    static get pluginName() {
        return 'AddBorderToTableCellPlugin';
    }

    init() {
        const editor = this.editor;
        const border = editor.config.get('app.tableCellBorder');

        editor.conversion
            .for('downcast')
            .add(
                dispatcher => dispatcher.on(
                    'insert:table',
                    (evt, data, conversionApi) => modelAttributeToViewStyle(evt, data, conversionApi, border)
                ),
                { priority: 'low' }
            );
    }
}
