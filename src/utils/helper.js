/**
 * Recursive function to get child element by name
 */
export function getChildrenByName(viewElement, searchName) {
    let children = [];

    for (const childViewElement of viewElement.getChildren()) {
        childViewElement.name === searchName
            ? children.push(childViewElement)
            : children = [...children, ...getChildrenByName(childViewElement, searchName)];
    }

    return children;
}
