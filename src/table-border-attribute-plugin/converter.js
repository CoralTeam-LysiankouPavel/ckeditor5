import { ATTRIBUTE_BORDER } from "./plugin";

export function __modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                const border = data.attributeNewValue;
                viewWriter.setAttribute(ATTRIBUTE_BORDER, border, childViewElement);
                viewWriter.setAttribute('cellspacing', '0', childViewElement);
                viewWriter.setAttribute('cellpadding', '0', childViewElement);
            } else {
                viewWriter.removeAttribute(ATTRIBUTE_BORDER, childViewElement);
            }
        }
    }
}

export function __viewStyleToModelAttribute(evt, data, conversionApi) {
    const border = data.viewItem.getAttribute(ATTRIBUTE_BORDER);

    if (border === undefined) {
        return;
    }

    const writer = conversionApi.writer;

    for (const item of data.modelRange.getItems({ shallow: true })) {
        writer.setAttribute(ATTRIBUTE_BORDER, border, item);
    }
}
