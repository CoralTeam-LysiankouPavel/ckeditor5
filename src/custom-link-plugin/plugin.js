import {Plugin} from '@ckeditor/ckeditor5-core';
import InsertCustomLinkCommand from "./insert-custom-link-command";

export const ATTRIBUTE_ID = 'id';

export default class CustomLinkPlugin extends Plugin {
    static get pluginName() {
        return 'CustomLinkPlugin';
    }

    init() {
        const editor = this.editor;
        const model = editor.model;

        model.schema.extend( 'paragraph', { allowAttributes: [ ATTRIBUTE_ID ] } );
        editor.commands.add('insertCustomLink', new InsertCustomLinkCommand(editor));

        editor.commands.get('insertCustomLink').on(
            'execute',
            (_, args) => {
                editor.model.change(writer => {
                    const id = args[2];

                    if (!id) {
                        return
                    }

                    const link = editor.model
                        .document
                        .selection
                        .getFirstPosition()
                        .findAncestor('paragraph');

                    if (link) {
                        writer.setAttribute('id', id, link);
                    }
                });
            },
            { priority: 'low' }
        );

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