/**
 * as soon as we change default dataDowncast process of image model (@see ImageDataDowncastPlugin)
 * we also have to adjust dataDowncast and upcast of model align attributes and html element styles
 */

import { Plugin } from 'ckeditor5/src/core';
import { convertModelAttributeToViewStyle, convertViewStyleToModelAttribute } from './converter';
import { normalizeImageStyles } from "@ckeditor/ckeditor5-image/src/imagestyle/utils";

export default class AddStyleOnImageAlignPlugin extends Plugin {
    static get pluginName() {
        return 'AddStyleOnImageAlignPlugin';
    }

    init() {
        const editor = this.editor;

        // convert model attribute to html element style
        editor.conversion
            .for('dataDowncast')
            .add(
                dispatcher => dispatcher.on('attribute:imageStyle', convertModelAttributeToViewStyle),
                { priority: 'low' }
            );

        // convert html element style to model attribute
        const data = editor.data;
        const styles = normalizeImageStyles(editor.config.get('image.styles'));
        data.upcastDispatcher.on(
            'element:p',
            convertViewStyleToModelAttribute(styles),
            {priority: 'low'}
        );
    }
}
