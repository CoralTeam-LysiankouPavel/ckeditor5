/**
 * This plugin is provide functionality to insert attached file like link to download.
 * File will be added like paragraph with link called like filename.
 * Paragraph with link contains unique id for easy delete element if needed.
 */

import { Plugin } from 'ckeditor5/src/core';

import InsertAttachedFileEditing from "./insert-attached-file-editing";
import './styles.css';

export default class InsertAttachedFilePlugin extends Plugin {
    static get requires() {
        return [InsertAttachedFileEditing];
    }

    init() {}
}
