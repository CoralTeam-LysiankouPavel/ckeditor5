import { Plugin } from 'ckeditor5/src/core';
import InsertAttachedFile from "./insert-attached-file";
import RemoveAttachedFile from "./remove-attached-file";

export default class AttachedFilePlugin extends Plugin {
    init() {
        const editor = this.editor;

        editor.commands.add('insertAttachedFile', new InsertAttachedFile(editor));
        editor.commands.add('removeAttachedFile', new RemoveAttachedFile(editor));
    }
}
