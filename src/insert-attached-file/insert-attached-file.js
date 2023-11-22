import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertAttachedFile extends Command {
    execute(options) {
        const { text, href, id } = options || { text: '', href: '', id: '' };

        const editor = this.editor;

        editor.model.change(writer => {
            setTimeout(() => {
                editor.execute( 'link', text, id, href );
                editor.execute('enter');
            });
        });
    }
}
