/**
 * By default dataDowncast process of image model adds only classes (not styles).
 * These classes are cut almost bu every email client.
 * That's why we have to extend default dataDowncast process by adding styles manually.
 */

export function modelAttributeToViewStyle(evt, data, conversionApi) {

    // <p>...</p>
    const pViewElement = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    viewWriter.setStyle({
        'display'   : 'table',
        'clear'     : 'both',
        'text-align': 'center',
        'margin'    : '1em auto'
    }, pViewElement);

    for (const childViewElement of pViewElement.getChildren()) {
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
