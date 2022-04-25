export function modelAttributeToViewStyle(evt, data, conversionApi, padding) {
    // <figure>...</figure>
    const figureViewElement = conversionApi.mapper.toViewElement(data.item);
    const viewWriter = conversionApi.writer;

    for (const childViewElement of _getChildrenByName(figureViewElement, 'td')) {
        viewWriter.setStyle('padding', padding, childViewElement);
    }
}

/**
 * Recursive function to get child element by name
 */
function _getChildrenByName(viewElement, searchName) {
    let children = [];

    for (const childViewElement of viewElement.getChildren()) {
        childViewElement.name === searchName
            ? children.push(childViewElement)
            : children = [...children, ..._getChildrenByName(childViewElement, searchName)];
    }

    return children;
}
