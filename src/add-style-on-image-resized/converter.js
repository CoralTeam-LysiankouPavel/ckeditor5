/**
 * CKEditor content is wrapped (manually in backend api) into container with max width 1000px before sending as email.
 * In the future special plugin should be created.
 * As temp solution we will hardcode "MAX WIDTH" for our calculation on image resize
 */
const MAX_WIDTH = 1000;

export function modelAttributeToViewStyle(evt, data, conversionApi) {
    // <p>...</p>
    const pViewElement = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    for (const childViewElement of pViewElement.getChildren()) {
        if (childViewElement.name === 'img') {
            if (data.attributeNewValue !== null) {
                const imageWidthPercent = parseFloat(data.attributeNewValue.replaceAll('%', ''));
                const imageWidth = MAX_WIDTH * imageWidthPercent / 100;

                viewWriter.setAttribute('width', imageWidth, childViewElement)
            } else {
                viewWriter.removeAttribute('width', childViewElement);
            }
        }
    }
}
