import Command from "@ckeditor/ckeditor5-core/src/command";

export const DOWNLOAD_LINK_TEXT = 'Click to Download: ';

export default class InsertAttachedFile extends Command {
    execute(options) {
        const { text, href, id } = options || { text: '', href: '', id: '' };
        const editor = this.editor;

        editor.model.change(writer => {
            const linkText = DOWNLOAD_LINK_TEXT + text;
            editor.execute( 'insertCustomLink', href, linkText, id);
        });
    }
}
