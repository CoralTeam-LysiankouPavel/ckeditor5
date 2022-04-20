import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertAllFootersCommand extends Command {
    execute() {
        const editor = this.editor;
        const footers = editor.config.get('app.footers');

        footers.forEach((footer, idx) => {
            editor.execute('insertFooter', footer.text, footer.href);

            // if it's not the last element in array
            if (idx !== footers.length - 1) {
                editor.execute('enter');
            }
        });
    }
}
