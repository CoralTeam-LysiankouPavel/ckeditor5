/**
 * Plugin is used to change default 'data downcast' process for images
 *
 * Instead of default:
 *  <figure styles="...">
 *      <img src="..." styles="...">
 *  </figure>
 * to
 *  <p styles="...">
 *      <img src="..." styles="...">
 *  </p>
 *
 *
 *  Why default behavior was changed:
 *    - `<figure>` element is not supported in MicrosoftOutlook in Microsoft 365 Office
 *    - because of `<figure>` element MicrosoftOutlook in Microsoft 365 Office makes significant changes of email body
 *    - through empirical way `<p>` element is not modified
 */

import { Plugin } from 'ckeditor5/src/core';
import { imageDataDowncast } from './converter';

export default class ImageDataDowncastPlugin extends Plugin {
    static get pluginName() {
        return 'ImageDataDowncastPlugin';
    }

    init() {
        const editor = this.editor;

        editor.conversion
            .for('dataDowncast')
            .elementToElement({
                model: 'image',
                view: (modelElement, {writer}) => imageDataDowncast(writer),
                converterPriority: 'high'
            });
    }
}
