import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertFooterCommand extends Command {
    execute(text, href) {
        const editor = this.editor;

        editor.model.change(writer => {
            const selection = editor.model.document.selection;

            if (!selection.isCollapsed) {
                editor.model.deleteContent(selection);
            }

            const position = selection.getFirstPosition();

            const attributes = new Map();
            attributes.set('linkHref', href);

            editor.model.insertContent(
                writer.createText(text, attributes),
                position
            );
        });
    }

    refresh() {
        const path = this.editor.model.document.selection.focus.path;

        /**
         * When current path contains exactly 2 coordinates, that means that focus is on string.
         * When current path contains exactly 5 coordinates, that means that focus is inside table.
         */
        this.isEnabled = (path.length === 2 || path.length === 5);
    }
}
