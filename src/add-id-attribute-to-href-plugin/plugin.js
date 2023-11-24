import {Plugin} from '@ckeditor/ckeditor5-core';
import InsertLinkWithIdCommand from "./insert-link-with-id-command";
import RemoveLinkWithIdCommand from "./remove-link-with-id-command";

export const ATTRIBUTE_ID = 'id';

export default class AddIdAttributeToHrefPlugin extends Plugin {
    static get pluginName() {
        return 'CustomLinkPlugin';
    }

    init() {
        const editor = this.editor;
        const model = editor.model;

        model.schema.extend( 'paragraph', { allowAttributes: [ ATTRIBUTE_ID ] } );
        editor.commands.add('insertLinkWithId', new InsertLinkWithIdCommand(editor));
        editor.commands.add('removeLinkWithId', new RemoveLinkWithIdCommand(editor));

        editor.conversion
            .for( 'downcast' )
            .attributeToAttribute( {
                model: 'id',
                view: 'id'
            } );

        editor.conversion
            .for( 'upcast' )
            .attributeToAttribute( {
                view: 'id',
                model: 'id'
            } );
    }
}
