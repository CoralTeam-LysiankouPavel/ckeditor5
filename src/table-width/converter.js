import { ATTRIBUTE_WIDTH } from "./plugin";

export function modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                const width = data.attributeNewValue;
                viewWriter.setAttribute(ATTRIBUTE_WIDTH, width, childViewElement);
                viewWriter.setStyle(ATTRIBUTE_WIDTH, width + 'px', childViewElement);
            } else {
                viewWriter.removeAttribute(ATTRIBUTE_WIDTH, childViewElement);
                viewWriter.removeStyle(ATTRIBUTE_WIDTH, childViewElement)
            }
        }
    }
}

export function viewStyleToModelAttribute(evt, data, conversionApi) {
    const width = data.viewItem.getAttribute(ATTRIBUTE_WIDTH);

    if (width === undefined) {
        return;
    }

    const writer = conversionApi.writer;

    for (const item of data.modelRange.getItems({ shallow: true })) {
        writer.setAttribute(ATTRIBUTE_WIDTH, width, item);
    }
}
