/**
 * - This plugin is used to provide functionality to insert banners (specific images).
 * - These banners (array of objects) should be configured in editor config. (@see src/ckeditor.js `toolbar.app.banners` section).
 *   By default it's empty array.
 *
 * - Banners (objects) format:
 *   [
 *     {
 *         name: 'name_1',
 *         url: 'url_1'
 *     },
 *     {
 *         name: 'name_2',
 *         url: 'url_2'
 *     },
 *     ...
 *   ]
 */

import { Plugin } from 'ckeditor5/src/core';

import InsertBannerEditing from "./insert-banner-editing";
import InsertBannerUI from "./insert-banner-ui";
import './styles.css'

export default class InsertBannerPlugin extends Plugin {
    static get requires() {
        return [InsertBannerEditing, InsertBannerUI];
    }

    init() {}
}
