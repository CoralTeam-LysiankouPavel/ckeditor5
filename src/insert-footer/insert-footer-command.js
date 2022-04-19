import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertFooterCommand extends Command {
    execute(text, href) {
        const editor = this.editor;
        const path = editor.model.document.selection.focus.path;
        const offset = path[1];

        if (offset !== 0) {
            editor.execute('enter');
        }

        editor.execute('input', {'text': text});
        editor.model.change(writer => this._selectInsertedText(writer, text.length));
        editor.execute('link', href);
        editor.model.change(writer => this._selectTheEndOfInsertedText(writer));
    }

    refresh() {
        const path = this.editor.model.document.selection.focus.path;

        /**
         * When current path contains exactly 2 coordinates, that means that focus is on string.
         */
        this.isEnabled = path.length === 2;
    }

    _selectInsertedText(writer, textLength) {
        const editor = this.editor;
        const document = editor.model.document;
        const root = document.getRoot();

        const path = document.selection.focus.path;
        const line = path[0];
        const offset = path[1];

        const range = editor.model.createRange(
            editor.model.createPositionFromPath(root, [line, offset - textLength]),
            editor.model.createPositionFromPath(root, [line, offset])
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
