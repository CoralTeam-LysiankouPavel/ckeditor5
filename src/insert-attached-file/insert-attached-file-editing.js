import { Plugin } from 'ckeditor5/src/core';
import InsertAttachedFile from "./insert-attached-file";

export default class InsertAttachedFileEditing extends Plugin {
    init() {
        const editor = this.editor;

        editor.commands.add('insertAttachedFile', new InsertAttachedFile(editor));
    }
}
