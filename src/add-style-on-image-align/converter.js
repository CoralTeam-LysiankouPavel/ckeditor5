const ATTRIBUTE_ALIGN_CENTER = 'alignCenter';
const ATTRIBUTE_ALIGN_LEFT   = 'alignLeft';
const ATTRIBUTE_ALIGN_RIGHT  = 'alignRight';
const ATTRIBUTE_ALIGN_SIDE   = 'side';

/**
 * By default dataDowncast process of image model adds only classes (not styles).
 * These classes are cut almost bu every email client.
 * That's why we have to extend default dataDowncast process by adding styles manually.
 */
export function convertModelAttributeToViewStyle(evt, data, conversionApi) {

    // <p>...</p>
    const pViewElement = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    switch (data.attributeNewValue) {
        case ATTRIBUTE_ALIGN_LEFT:
            viewWriter.setStyle({
                'float'       : 'left',
                'margin-right': '1.5em',
                'text-align'  : 'left'
            }, pViewElement);

            break;

        case ATTRIBUTE_ALIGN_SIDE:
        case ATTRIBUTE_ALIGN_RIGHT:
            viewWriter.setStyle({
                'float'      : 'right',
                'margin-left': '1.5em',
                'text-align' : 'right',
            }, pViewElement);

            break;

        case ATTRIBUTE_ALIGN_CENTER:
        default:
            viewWriter.setStyle({
                'margin-left' : 'auto',
                'margin-right': 'auto',
                'text-align'  : 'center'
            }, pViewElement);
    }
}

/**
 * this function is duplicated from @ckeditor/ckeditor5-image/src/imagestyle/converters::viewToModelStyleAttribute(styles)
 *
 * the difference is calculation of `modelImageElement` variable
 * this difference is caused by changes of default dataDowncast behaviour for image model
 */
export function convertViewStyleToModelAttribute(styles) {
    // Convert only non–default styles.
    const filteredStyles = styles.filter(style => !style.isDefault);

    return (evt, data, conversionApi) => {
        if (!data.modelRange) {
            return;
        }

        const viewFigureElement = data.viewItem;
        let modelImageElement = getImageModel(data.modelRange.getItems());

        // Check if `modelImageElement` exists (see: https://github.com/ckeditor/ckeditor5/issues/8270)
        // and `imageStyle` attribute is allowed for that element, otherwise stop conversion early.
        if (modelImageElement && !conversionApi.schema.checkAttribute(modelImageElement, 'imageStyle')) {
            return;
        }

        // Convert style one by one.
        for (const style of filteredStyles) {
            // Try to consume class corresponding with style.
            if (conversionApi.consumable.consume(viewFigureElement, {classes: style.className})) {
                // And convert this style to model attribute.
                conversionApi.writer.setAttribute('imageStyle', style.name, modelImageElement);
            }
        }
    }
}

function getImageModel(items) {
    while(true) {
        let item = items.next();

        if (item.done) {
            break;
        }

        if (item.value.name === 'image') {
            return item.value;
        }
    }

    return null;
}
