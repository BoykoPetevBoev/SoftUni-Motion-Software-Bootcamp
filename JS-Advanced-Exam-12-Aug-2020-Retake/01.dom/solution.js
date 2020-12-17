function solve() {
    eventHandler(getDOMElement("#container > button"), addMovie);
    eventHandler(getDOMElement("#archive > button"), clearArchive);
}
function addMovie(e) {
    e.preventDefault();

    const nameInput = getDOMElement("#container > input[type=text]:nth-child(1)");
    const hallInput = getDOMElement("#container > input[type=text]:nth-child(2)");
    const priceInput = getDOMElement("#container > input[type=text]:nth-child(3)");
    const moviesUl = getDOMElement('#movies > ul');

    const name = nameInput.value;
    const hall = hallInput.value;
    const price = Number(priceInput.value);

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
    appendClilds(moviesUl, [li]);
    clearValue(nameInput, hallInput, priceInput);
}

function archiveMovie(e) {
    const button = e.target;
    const div = button.parentNode;
    const li = div.parentNode;
    const input = getDOMElement('input', div);
    const priceElement = getDOMElement('strong', div);
    const hallElement = getDOMElement('strong', li);
    const archiveUl = getDOMElement('#archive > ul');
    const tickets = Number(input.value);
    const price = Number(priceElement.innerHTML);

    if (!tickets) return;

    const archive = createElement('button', 'Delete');
    const totalPrice = createElement('strong', `Total amount: ${(tickets * price).toFixed(2)}`);

    div.remove();
    hallElement.remove();

    eventHandler(archive, removeList);
    appendClilds(li, [totalPrice, archive]);
    appendClilds(archiveUl, [li]);
}

function removeList(e) {
    const li = e.target.parentNode;
    li.remove();
}

function clearArchive(e) {
    const archiveUl = getDOMElement('#archive > ul');
    archiveUl.innerHTML = '';
}

function eventHandler(element, fn) {
    element.addEventListener('click', fn);
}

function getDOMElement(selector, parent) {
    const element = parent
        ? parent.querySelector(selector)
        : document.querySelector(selector);

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

