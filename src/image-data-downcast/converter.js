/**
 * create `<p><img></p>` html structure
 */
export function imageDataDowncast(writer) {
    // <img>
    const emptyElement = writer.createEmptyElement('img');
    // <p></p>
    const p = writer.createContainerElement('p', {class: 'image'});

    // <p><img></p>
    writer.insert(writer.createPositionAt(p, 0), emptyElement);

    return p;
}
