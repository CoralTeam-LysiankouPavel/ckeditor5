import { ATTRIBUTE_ALIGN } from "./plugin";

export function __modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                viewWriter.setAttribute(ATTRIBUTE_ALIGN, data.attributeNewValue, childViewElement);
            } else {
                viewWriter.removeAttribute(ATTRIBUTE_ALIGN, childViewElement);
            }
        }
    }
}

export function __viewStyleToModelAttribute(evt, data, conversionApi) {
    const tableAlign = data.viewItem.getAttribute(ATTRIBUTE_ALIGN);

    if (tableAlign === undefined) {
        return;
    }

    const writer = conversionApi.writer;

    for (const item of data.modelRange.getItems({ shallow: true })) {
        writer.setAttribute(ATTRIBUTE_ALIGN, tableAlign, item);
    }
}
