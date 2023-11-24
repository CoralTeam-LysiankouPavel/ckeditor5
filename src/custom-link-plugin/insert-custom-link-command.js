import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertCustomLinkCommand extends Command {
    execute(href, text, id) {
        const editor = this.editor;

        editor.model.change(writer => {
            const selection = editor.model.document.selection;

            const position = selection.getFirstPosition();

            const attributes = new Map();
            attributes.set('linkHref', href);

            editor.model.insertContent(
                writer.createText(text, attributes),
                position
            );
        });
    }
}
