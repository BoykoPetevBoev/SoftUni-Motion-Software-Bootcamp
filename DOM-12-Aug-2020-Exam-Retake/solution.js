function solve() {
    eventHandler(getDOMElement('form-event'), addMovie);
    eventHandler(getDOMElement('clear'), clearArchive);
}
function addMovie(e) {
    e.preventDefault();
    const name = getDOMElement('name-input').value;
    const hall = getDOMElement('hall-input').value;
    const price = Number(getDOMElement('price-input').value);

    if (!name || !hall || !price) return;

    const li = createElement('li');
    const span = createElement('span', name);
    const hallStrong = createElement('strong', 'Hall: ' + hall);
    const div = createElement('div');
    const priceStrong = createElement('strong', price.toFixed(2));
    const input = createElement('input', undefined, 'Tickets Sold');
    const archive = createElement('button', 'Archive');

    eventHandler(archive, archiveMovie);
    appendClilds(div, [priceStrong, input, archive]);
    appendClilds(li, [span, hallStrong, div]);
    appendClilds(
        getDOMElement('movies-ul'), [li]
    );
    clearValue(
        getDOMElement('name-input'),
        getDOMElement('hall-input'),
        getDOMElement('price-input')
    );
}

function archiveMovie(e) {
    const div = e.target.parentNode;
    const input = getDOMElement(undefined, 'input', div);
    const tickets = Number(input.value);

    if (!tickets) return;

    const li = div.parentNode;
    const priceElement = getDOMElement(undefined, 'strong', div);
    const hallElement = getDOMElement(undefined, 'strong', li);
    const totalPrice = (tickets * Number(priceElement.innerHTML)).toFixed(2);
    const archive = createElement('button', 'Delete');
    const totalPriceElement = createElement('strong', `Total amount: ${totalPrice}`);

    div.remove();
    hallElement.remove();

    eventHandler(archive, removeList);
    appendClilds(li, [totalPriceElement, archive]);
    appendClilds(getDOMElement('archive-ul'), [li]);
}

function removeList(e) {
    const li = e.target.parentNode;
    li.remove();
}

function clearArchive(e) {
    const archiveUl = getDOMElement(undefined, '#archive > ul');
    archiveUl.innerHTML = '';
}

function eventHandler(element, fn) {
    element.addEventListener('click', fn);
}

function getDOMElement(id, selector, parent) {

    const getById = (id) => {
        return document.getElementById(id);
    };
    const getBySelector = (selector, parent) => {
        return parent
            ? parent.querySelector(selector)
            : document.querySelector(selector);
    }
    const element = id
        ? getById(id)
        : getBySelector(selector, parent);

    if (!element) {
        throw new Error('Missing DOM element! ' + selector);
    }
    return element;
}

function createElement(type, value, placeholder) {
    const element = document.createElement(type);
    if (value) element.innerHTML = value;
    if (placeholder) element.placeholder = placeholder;
    return element;
}

function appendClilds(parent, childrens) {
    parent.append(...childrens);
}

function clearValue(...elements) {
    elements.map(el => el.value = '');
}

