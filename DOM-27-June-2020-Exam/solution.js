document.addEventListener('DOMContentLoaded', () => eventHandler(document.getElementById("addNewPet"), addPetHandler));

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

function createElement(type, value) {
    const element = document.createElement(type);
    if (value) element.innerHTML = value;
    return element;
}

function appendClilds(parent, childrens) {
    parent.append(...childrens);
}

function clearValue(...elements) {
    elements.map(el => el.value = '');
}

function addPetHandler(e) {
    e.preventDefault();
    const nameInput = getDOMElement('#nameInput');
    const ageInput = getDOMElement('#ageInput');
    const kindInput = getDOMElement('#kindInput');
    const ownerInput = getDOMElement('#ownerInput');
    const adoptionUl = getDOMElement("#adoption > ul");
    const name = nameInput.value;
    const age = ageInput.value;
    const kind = kindInput.value;
    const owner = ownerInput.value;

    if (!name || !Number(age) || !kind || !owner) return;

    const nameElem = createElement('strong', name);
    const ageElem = createElement('strong', age);
    const kindElem = createElement('strong', kind);
    const petElem = createElement('p', `${nameElem.outerHTML} is a ${ageElem.outerHTML} year old ${kindElem.outerHTML}`);
    const ownerElem = createElement('span', `Owner: ${owner}`);
    const buttonElem = createElement('button', 'Contact with owner');
    const petComponent = createElement('li');

    eventHandler(buttonElem, contactWithOwner);
    appendClilds(petComponent, [petElem, ownerElem, buttonElem]);
    appendClilds(adoptionUl, [petComponent]);
    clearValue(nameInput, ageInput, kindInput, ownerInput);
}

function contactWithOwner(e) {
    const button = e.target;
    const li = button.parentNode;
    const div = createElement('div');
    const input = createElement('input');

    input.placeholder = 'Enter your names';
    button.innerHTML = 'Yes! I take it!';
    button.removeEventListener('click', contactWithOwner);

    eventHandler(button, getPet);
    appendClilds(div, [input, button]);
    appendClilds(li, [div]);
}

function getPet(e) {
    const div = e.target.parentNode;
    const li = div.parentNode;
    const button = createElement('button', 'Checked');
    const adopted = getDOMElement('#adopted > ul');
    const input = getDOMElement('input', div);
    const span = getDOMElement('span', li);

    if (!input.value) return;

    span.innerHTML = `New Owner: ${input.value}`;
    div.remove();
    eventHandler(button, deleteListItem)
    appendClilds(li, [button]);
    appendClilds(adopted, [li]);
}

function deleteListItem(e) {
    const list = e.target.parentNode;
    list.remove();
}




