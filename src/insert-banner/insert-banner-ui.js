import { Plugin } from 'ckeditor5/src/core';
import { DropdownButtonView, Model, createDropdown, addListToDropdown } from 'ckeditor5/src/ui';
import { Collection } from 'ckeditor5/src/utils';

export default class InsertBannerUI extends Plugin {
    init() {
        const editor = this.editor;
        const options = editor.config.get('app.banners');

        this._registerBannersDropdown(options);
    }

    _registerBannersDropdown(options) {
        const editor = this.editor;

        const componentCreator = locale => {
            const dropdownView = createDropdown(locale, DropdownButtonView);
            dropdownView.class = 'ck-code-block-banners';

            const dropdownButton = dropdownView.buttonView;
            dropdownButton.set({
                label: 'Banners',
                tooltip: true,
                withText: true,
                class: 'ck-insert-banner-button'
            });

            addListToDropdown(dropdownView, this._getDropdownItemsDefinitions(options));

            // Disable the "Banner" insert button when the command is disabled.
            const command = editor.commands.get('insertImage');
            dropdownView.bind('isEnabled').to(command);

            // Execute the command when the dropdown item is clicked (executed).
            this.listenTo(dropdownView, 'execute', evt => {
                /**
                 * The command is registered by the ImageEditing plugin as insertImage.
                 * @see https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image_insertimagecommand-InsertImageCommand.html
                 */
                editor.execute('insertImage', { source: evt.source.imageUrl });
                editor.editing.view.focus();
            });

            return dropdownView;
        };

        editor.ui.componentFactory.add( 'insertBanner', componentCreator );
    }

    _getDropdownItemsDefinitions(options) {
        const itemDefinitions = new Collection();

        options.map(option => {
            const definition = {
                type: 'button',
                model: new Model({
                    label: option.name,
                    imageUrl: option.url,
                    withText: true
                })
            };

            // Add the item definition to the collection.
            itemDefinitions.add(definition);
        } );

        return itemDefinitions;
    }
}
