import { ATTRIBUTE_HEIGHT } from "./plugin";

export function __modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                const height = data.attributeNewValue;
                viewWriter.setAttribute(ATTRIBUTE_HEIGHT, height, childViewElement);
                viewWriter.setStyle(ATTRIBUTE_HEIGHT, height + 'px', childViewElement);
            } else {
                viewWriter.removeAttribute(ATTRIBUTE_HEIGHT, childViewElement);
                viewWriter.removeStyle(ATTRIBUTE_HEIGHT, childViewElement)
            }
        }
    }
}

export function __viewStyleToModelAttribute(evt, data, conversionApi) {
    const height = data.viewItem.getAttribute(ATTRIBUTE_HEIGHT);

    if (height === undefined) {
        return;
    }

    const writer = conversionApi.writer;

    for (const item of data.modelRange.getItems({ shallow: true })) {
        writer.setAttribute(ATTRIBUTE_HEIGHT, height, item);
    }
}
