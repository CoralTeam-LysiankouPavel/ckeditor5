import { Plugin } from 'ckeditor5/src/core';
import { DropdownButtonView, Model, createDropdown, addListToDropdown } from 'ckeditor5/src/ui';
import { Collection } from 'ckeditor5/src/utils';

export default class InsertFooterUI extends Plugin {
    init() {
        const editor = this.editor;
        const options = editor.config.get('app.footers');

        this._registerFootersDropdown(options);
    }

    _registerFootersDropdown(options) {
        const editor = this.editor;

        const componentCreator = locale => {
            const dropdownView = createDropdown(locale, DropdownButtonView);
            dropdownView.class = 'ck-code-block-footers';

            const dropdownButton = dropdownView.buttonView;
            dropdownButton.set({
                label: 'Footers',
                tooltip: true,
                withText: true,
                class: 'ck-insert-footer-button'
            });

            addListToDropdown(dropdownView, this._getDropdownItemsDefinitions(options));

            // Disable the "Footer" insert button when the command is disabled.
            const command = editor.commands.get('insertFooter');
            dropdownView.bind('isEnabled').to(command);

            // Execute the command when the dropdown item is clicked (executed).
            this.listenTo(dropdownView, 'execute', evt => {
                const footer = evt.source;
                editor.execute('insertFooter', footer.text, footer.href);
            });

            return dropdownView;
        };

        editor.ui.componentFactory.add( 'insertFooter', componentCreator );
    }

    _getDropdownItemsDefinitions(options) {
        const itemDefinitions = new Collection();

        options.map(option => {
            const definition = {
                type: 'button',
                model: new Model({
                    label: option.label,
                    text: option.text,
                    href: option.href,
                    withText: true
                })
            };

            // Add the item definition to the collection.
            itemDefinitions.add(definition);
        } );

        return itemDefinitions;
    }
}