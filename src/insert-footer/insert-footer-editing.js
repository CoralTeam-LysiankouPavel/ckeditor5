import { Plugin } from 'ckeditor5/src/core';
import InsertFooterCommand from "./insert-footer-command";
import InsertAllFootersCommand from "./insert-all-footers-command";

export default class InsertFooterEditing extends Plugin {
    init() {
        const editor = this.editor;

        editor.commands.add('insertFooter', new InsertFooterCommand(editor));
        editor.commands.add('insertAllFooters', new InsertAllFootersCommand(editor));
    }
}
