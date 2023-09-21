import { ATTRIBUTE_WIDTH } from "./plugin";

export function __modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                let width = data.attributeNewValue;

                if (width.endsWith('px')) {
                    width = width.replace('px', '');
                }

                viewWriter.setAttribute(ATTRIBUTE_WIDTH, width, childViewElement);
                viewWriter.setStyle(ATTRIBUTE_WIDTH, width + 'px', childViewElement);
            } else {
                viewWriter.removeAttribute(ATTRIBUTE_WIDTH, childViewElement);
                viewWriter.removeStyle(ATTRIBUTE_WIDTH, childViewElement)
            }
        }
    }
}

export function __viewStyleToModelAttribute(evt, data, conversionApi) {
    const width = data.viewItem.getAttribute(ATTRIBUTE_WIDTH);

    if (width === undefined) {
        return;
    }

    const writer = conversionApi.writer;

    for (const item of data.modelRange.getItems({ shallow: true })) {
        writer.setAttribute(ATTRIBUTE_WIDTH, width, item);
    }
}
