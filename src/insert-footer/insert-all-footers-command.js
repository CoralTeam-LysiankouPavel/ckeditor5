import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertAllFootersCommand extends Command {
    execute() {
        const footers = this.editor.config.get('app.footers');

        footers.forEach(footer => {
            this.editor.execute('insertFooter', footer.text, footer.href);
        });
    }
}