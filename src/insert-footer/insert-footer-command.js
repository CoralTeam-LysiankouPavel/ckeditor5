import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertFooterCommand extends Command {
    execute(text, href) {
        const editor = this.editor;

        editor.execute('input', {'text': text});
        editor.model.change(writer => this._selectInsertedText(writer, text.length));
        editor.execute('link', href);
        editor.model.change(writer => this._selectTheEndOfInsertedText(writer));
    }

    refresh() {
        const path = this.editor.model.document.selection.focus.path;

        /**
         * When current path contains exactly 2 coordinates, that means that focus is on string.
         * When current path contains exactly 5 coordinates, that means that focus is inside table.
         */
        this.isEnabled = (path.length === 2 || path.length === 5);
    }

    _selectInsertedText(writer, textLength) {
        const editor = this.editor;
        const document = editor.model.document;
        const root = document.getRoot();

        const endPath = document.selection.focus.path;

        const startPath = [...endPath];
        startPath[startPath.length - 1] = startPath[startPath.length - 1] - textLength;

        const range = editor.model.createRange(
            editor.model.createPositionFromPath(root, startPath),
            editor.model.createPositionFromPath(root, endPath)
        );

        writer.setSelection(range);
    }

    _selectTheEndOfInsertedText(writer) {
        const editor = this.editor;
        const document = editor.model.document;
        const root = document.getRoot();

        const range = editor.model.createRange(
            editor.model.createPositionFromPath(root, document.selection.focus.path)
        );
        writer.setSelection(range);
    }
}
