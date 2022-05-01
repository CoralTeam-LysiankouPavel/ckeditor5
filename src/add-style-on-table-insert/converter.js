export function modelAttributeToViewStyle(evt, data, conversionApi) {

    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        viewWriter.setStyle('margin', 'auto', childViewElement);
    }
}
