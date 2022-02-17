export function modelAttributeToViewStyle(evt, data, conversionApi) {

    const figure = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    viewWriter.setStyle({
        'display'   : 'table',
        'clear'     : 'both',
        'text-align': 'center',
        'margin'    : '1em auto'
    }, figure);

    for (const childViewElement of figure.getChildren()) {
        if (childViewElement.name === 'img') {
            viewWriter.setStyle({
                'display'  : 'block',
                'margin'   : '0 auto',
                'max-width': '100%',
                'min-width': '50px'
            }, childViewElement);
        }
    }
}
