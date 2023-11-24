/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import DocumentListProperties from '@ckeditor/ckeditor5-list/src/documentListproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';


// custom plugins
// import ImageDataDowncastPlugin from "./image-data-downcast/plugin";
// import AddStyleOnImageAlignPlugin from './add-style-on-image-align/plugin';
// import AddStyleOnImageInsertPlugin from './add-style-on-image-insert/plugin';
// import AddStyleOnImageResizedPlugin from "./add-style-on-image-resized/plugin";
import ExtendParagraphSchemaPlugin from "./extend-paragraph-schema/plugin";
import InsertBannerPlugin from "./insert-banner/plugin";
import InsertFooterPlugin from "./insert-footer/plugin";

import AddStyleOnTableInsertPlugin from  "./add-style-on-table-insert/plugin";
import AddPuddingToTableCellPlugin from "./add-padding-to-table-cell/plugin";
import TableWidthAttributePlugin from "./table-width-attribute-plugin/plugin";
import TableAlignAttributePlugin from "./table-align-attribute-plugin/plugin";
import TableHeightAttributePlugin from "./table-height-attribute-plugin/plugin";
import TableBorderAttributePlugin from "./table-border-attribute-plugin/plugin";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	CloudServices,
	Code,
	CodeBlock,
	EasyImage,
	Essentials,
	Font,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	DocumentListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	SimpleUploadAdapter,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEmoji,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation,
	Underline,
	UploadAdapter,

	// custom plugins
	// ImageDataDowncastPlugin,
	// AddStyleOnImageAlignPlugin,
	// AddStyleOnImageInsertPlugin,
	// AddStyleOnImageResizedPlugin,
	ExtendParagraphSchemaPlugin,
	InsertBannerPlugin,
	InsertFooterPlugin,

	TableWidthAttributePlugin,
	TableHeightAttributePlugin,
	TableAlignAttributePlugin,
	TableBorderAttributePlugin,

	// AddPuddingToTableCellPlugin,
	// AddStyleOnTableInsertPlugin,
	// TableAlignPlugin
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
			'|',
			'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
			'|',
			'bold', 'italic', 'underline', 'strikethrough', 'link', 'code','subscript', 'superscript',
			'|',
			'specialCharacters',
			'|',
			'bulletedList', 'numberedList',
			'|',
			'outdent', 'indent',
			'|',
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
			'|',
			'resizeImage',
			'|',
			'imageTextAlternative',
			'|',
			'uploadImage', 'blockQuote', 'mediaEmbed', 'undo', 'redo',
			'|',
			'insertTable', 'tableProperties', 'tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties',
			'|',
			'codeBlock',
			'|',
			'horizontalLine',
			'|',
			// 'pageBreak'
			'removeFormat',
			'|',
			'selectAll',
			'|',
			'insertBanner',
			'|',
			'insertFooter'
		],
		shouldNotGroupWhenFull: true
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		],
		supportAllValues: true
	},
	fontFamily: {
		options: [
			'default',
    		'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		],
		supportAllValues: true
	},
	fontColor: {
		colors: [
			{
				color: '#000000',
				label: 'Black'
			},
			{
				color: '#4D4D4D',
				label: 'Dim grey'
			},
			{
				color: '#999999',
				label: 'Grey'
			},
			{
				color: '#E6E6E6',
				label: 'Light grey'
			},
			{
				color: '#FFFFFF',
				label: 'White'
			},
			{
				color: '#E64C4C',
				label: 'Red'
			},
			{
				color: '#E6994C',
				label: 'Orange'
			},
			{
				color: '#E6E64C',
				label: 'Yellow'
			},
			{
				color: '#99E64C',
				label: 'Light green'
			},
			{
				color: '#4CE64C',
				label: 'Green'
			},
			{
				color: '#4CE699',
				label: 'Aquamarine'
			},
			{
				color: '#4CE6E6',
				label: 'Turquoise'
			},
			{
				color: '#4C99E6',
				label: 'Light blue'
			},
			{
				color: '#4C4CE6',
				label: 'Blue'
			},
			{
				color: '#994CE6',
				label: 'Purple'
			}
		],
		documentColors: 0
	},
	fontBackgroundColor: {
		colors: [
			{
				color: '#000000',
				label: 'Black'
			},
			{
				color: '#4D4D4D',
				label: 'Dim grey'
			},
			{
				color: '#999999',
				label: 'Grey'
			},
			{
				color: '#E6E6E6',
				label: 'Light grey'
			},
			{
				color: '#FFFFFF',
				label: 'White'
			},
			{
				color: '#E64C4C',
				label: 'Red'
			},
			{
				color: '#E6994C',
				label: 'Orange'
			},
			{
				color: '#E6E64C',
				label: 'Yellow'
			},
			{
				color: '#99E64C',
				label: 'Light green'
			},
			{
				color: '#4CE64C',
				label: 'Green'
			},
			{
				color: '#4CE699',
				label: 'Aquamarine'
			},
			{
				color: '#4CE6E6',
				label: 'Turquoise'
			},
			{
				color: '#4C99E6',
				label: 'Light blue'
			},
			{
				color: '#4C4CE6',
				label: 'Blue'
			},
			{
				color: '#994CE6',
				label: 'Purple'
			}
		],
		documentColors: 0
	},
	image: {
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative',
			// '|',
			// 'resizeImage:25',
			// 'resizeImage:50',
            // 'resizeImage:75',
            // 'resizeImage:original'
		],
		styles: [
			// This option is equal to a situation where no style is applied.
			'full',

			// This represents an image aligned to the left.
			'alignLeft',

			// This represents an image aligned to the right.
			'alignRight',

			'side',

			'alignCenter'
		],
		// resizeOptions: [
        //     {
        //         name: 'resizeImage:original',
        //         value: null,
        //         icon: 'original'
        //     },
        //     {
        //         name: 'resizeImage:25',
        //         value: '25',
        //         icon: 'small'
        //     },
        //     {
        //         name: 'resizeImage:50',
        //         value: '50',
        //         icon: 'medium'
        //     },
        //     {
        //         name: 'resizeImage:75',
        //         value: '75',
        //         icon: 'large'
        //     }
        // ],
	},
	table: {
		contentToolbar: [
			'tableProperties',
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties'
		]
	},
	link: {
        decorators: {
            isExternal: {
					mode: 'automatic',
					callback: url => url.startsWith('http'),
					attributes: {
					target: '_blank'
				}
          	},
        }
    },
	list: {
		properties: {
			styles: true,
			startIndex: false,
			reversed: false
		}
	},
	indentBlock: {
		offset: 0.5,
		unit: 'in'
	},
	language: 'en',
	app: {
		banners: [],
		footers: [],
		containerWidth: 1000,
		tableCellPadding: '15px',
		tableCellBorder: '1px solid #bfbfbf;',
	}
};

function SpecialCharactersEmoji( editor ) {
    editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', [
        { title: 'smiley face', character: '😊' },
        { title: 'rocket', character: '🚀' },
        { title: 'wind blowing face', character: '🌬️' },
        { title: 'floppy disk', character: '💾' },
        { title: 'heart', character: '❤️' }
    ] );
}
