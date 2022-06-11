export function modelAttributeToViewStyle(evt, data, conversionApi, containerWidth) {
    // <p>...</p>
    const pViewElement = conversionApi.mapper.toViewElement( data.item );
    const viewWriter = conversionApi.writer;

    for (const childViewElement of pViewElement.getChildren()) {
        if (childViewElement.name === 'img') {
            if (data.attributeNewValue !== null) {
                const imageWidthPercent = parseFloat(data.attributeNewValue.replaceAll('%', ''));
                const imageWidth = containerWidth * imageWidthPercent / 100;

                viewWriter.setAttribute('width', imageWidth, childViewElement)
            } else {
                viewWriter.removeAttribute('width', childViewElement);
            }
        }
    }
}
