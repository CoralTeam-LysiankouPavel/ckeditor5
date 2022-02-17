const ATTRIBUTE_ALIGN_CENTER = 'alignCenter';
const ATTRIBUTE_ALIGN_LEFT   = 'alignLeft';
const ATTRIBUTE_ALIGN_RIGHT  = 'alignRight';
const ATTRIBUTE_ALIGN_SIDE   = 'side';

export function modelAttributeToViewStyle(evt, data, conversionApi) {

    const figure = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    switch (data.attributeNewValue) {
        case ATTRIBUTE_ALIGN_LEFT:
            viewWriter.setStyle({
                'float'       : 'left',
                'margin-right': '1.5em'
            }, figure);

            break;

        case ATTRIBUTE_ALIGN_SIDE:
        case ATTRIBUTE_ALIGN_RIGHT:
            viewWriter.setStyle({
                'float'      : 'right',
                'margin-left': '1.5em'
            }, figure);

            break;

        case ATTRIBUTE_ALIGN_CENTER:
        default:
            viewWriter.setStyle({
                'margin-left' : 'auto',
                'margin-right': 'auto'
            }, figure);
    }
}
