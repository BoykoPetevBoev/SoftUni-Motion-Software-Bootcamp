eventListener(document, 'DOMContentLoaded', attachEvents);

function attachEvents() {
    eventListener(getElement('btnLoad'), 'click', loadPhonebook);
    eventListener(getElement('btnCreate'), 'click', createNewPerson);
}

async function loadPhonebook() {
    const data = await requester('GET');
    getElement('phonebook').innerHTML = '';
    const elements = Object
        .keys(data)
        .map(id => listElements(id, data));
    getElement('phonebook').append(...elements);
}

function listElements(id, data) {
    const button = createElement('button', 'Delete', id);
    const li = createElement('li', `${data[`${id}`].person}: ${data[`${id}`].phone}`);
    eventListener(button, 'click', deletePerson);
    li.appendChild(button);
    return li;
}

async function createNewPerson() {
    const person = getElement('person').value;
    const phone = getElement('phone').value;

    if (!person || !Number(phone)) return;

    requester('POST', { person, phone });
    getElement('person').value = '';
    getElement('phone').value = '';
    loadPhonebook();
}

async function deletePerson(e) {
    const id = e.target.value;
    await requester('DELETE', undefined, id);
    loadPhonebook();
}

function eventListener(element, event, fn) {
    element.addEventListener(event, fn);
}

function getElement(id) {
    const element = document.getElementById(id);
    if (!element) throw new Error('Missing DOM element! #' + id);
    return element;
}

function createElement(type, content, value) {
    const element = document.createElement(type);
    if (content) element.innerHTML = content;
    if (value) element.value = value;
    return element;
}

async function requester(method, body, id) {
    const url = id
        ? `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`
        : 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
    return data;
}