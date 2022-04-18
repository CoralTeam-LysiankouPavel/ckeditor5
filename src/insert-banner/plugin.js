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
