/**
 * creates `<p><img></p>` html structure
 */

export function imageDataDowncast(writer) {
    const emptyElement = writer.createEmptyElement('img');
    const figure = writer.createContainerElement('p', {class: 'image'});

    writer.insert(writer.createPositionAt(figure, 0), emptyElement);

    return figure;
}
