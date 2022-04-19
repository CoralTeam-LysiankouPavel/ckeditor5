/**
 * This plugin is provide functionality to insert footers (specific texts).
 * These footers (array of objects) should be configured in editor config. (@see src/ckeditor.js `toolbar.app.footers` section).
 * By default it's empty array.
 *
 * - Footers (objects) format:
 *   [
 *     {
 *         label: 'label_1',
 *         text: 'text_1'
 *         href: 'url_1'
 *     },
 *     {
 *         label: 'label_2',
 *         text: 'text_2'
 *         href: 'href_2'
 *     },
 *     ...
 *   ]
 */

import { Plugin } from 'ckeditor5/src/core';

import InsertFooterEditing from "./insert-footer-editing";
import InsertFooterUI from "./insert-footer-ui";
import './styles.css';

export default class InsertFooterPlugin extends Plugin {
    static get requires() {
        return [InsertFooterEditing, InsertFooterUI];
    }

    init() {}
}
