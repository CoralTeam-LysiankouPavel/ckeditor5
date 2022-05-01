import { getChildrenByName } from "../utils/helper";

export function modelAttributeToViewStyle(evt, data, conversionApi, padding) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of getChildrenByName(figureViewElement, 'td')) {
        viewWriter.setStyle('padding', padding, childViewElement);
    }
}

