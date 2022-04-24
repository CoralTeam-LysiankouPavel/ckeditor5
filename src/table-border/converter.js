import { ATTRIBUTE_BORDER } from "./plugin";

export function modelAttributeToViewStyle(evt, data, conversionApi) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of figureViewElement.getChildren()) {
        if (childViewElement.name === 'table') {
            if (data.attributeNewValue !== null) {
                viewWriter.setStyle(ATTRIBUTE_BORDER, data.attributeNewValue, childViewElement);
            } else {
                viewWriter.removeStyle(ATTRIBUTE_BORDER, childViewElement)
            }
        }
    }
}

export function viewStyleToModelAttribute(evt, data, conversionApi) {
    // <table>...</table>
    const tableView = data.viewItem;
    const border = tableView.getStyle(ATTRIBUTE_BORDER);

    if (border !== undefined) {
        const { schema, writer } = conversionApi;

        for ( const item of data.modelRange.getItems()) {
            if (schema.checkAttribute(item, ATTRIBUTE_BORDER)) {
                writer.setAttribute(ATTRIBUTE_BORDER, border, item);
            }
        }
    }
}
