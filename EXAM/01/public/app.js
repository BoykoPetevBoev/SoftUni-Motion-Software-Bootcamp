import { requester } from './requester.js';

document.addEventListener('DOMContentLoaded', loadPage);

async function loadPage() {
    eventHandler(getElement('submit'), 'click', addNewInfo);
    eventHandler(getElement('delete'), 'click', deleteInfo);
    eventHandler(getElement('edit'), 'click', changeInfo);

    const data = await getData('');
    loadTable(data);
}

async function getData(path) {
    const data = await requester('GET', path);
    if (!data) return [];
    return data;
}

function loadTable(data) {
    if (data.length === 0) return;

    const thead = createTableHead(Object.keys(data[0]));
    const tbody = createTableBody(data);
    const table = createElement('table', { childrens: [thead, tbody] });
    eventHandler(thead, 'click', sortTable);
    getElement('root').innerHTML = '';
    getElement('root').append(table);
}

function createTableHead(data) {
    const th = createElements(data, 'th');
    const tr = createElement('tr', { childrens: th });
    return createElement('thead', { childrens: [tr] });
}

function createTableBody(data) {
    const cols = data.map(element => createElements(Object.values(element), 'td'));
    const rows = cols.map(element => {
        const tr = createElement('tr', { childrens: element, className: 'body-line' });
        eventHandler(tr, 'click', rowEventHandler);
        return tr;
    })
    return createElement('tbody', { childrens: rows });
}

async function sortTable(e) {
    const criteria = e.target.innerHTML;

    if (!criteria) return;

    const data = await getData(`?_sort=${criteria}&_order=asc`);
    loadTable(data);
}

async function deleteInfo(e) {
    e.preventDefault();
    formButtonDisplay(false);
    await requester('DELETE', `/${e.target.value}`);

    const data = await getData()
    loadTable(data);
}

function changeInfo(e) {
    e.preventDefault();
    const id = e.target.value;

    console.log(id);
    formButtonDisplay(false);
}

async function addNewInfo(e) {
    e.preventDefault();

    const make = getElement('make').value;
    const model = getElement('model').value;
    const year = getElement('year').value;
    const availableColors = getElement('availableColors').value;

    const res = await requester('POST', '', { make, model, year, availableColors });

    console.log(res);
}

async function rowEventHandler(e) {
    const id = e.currentTarget.firstChild.innerHTML;
    const info = await requester('GET', `/${id}`);

    if (!info) return;

    Object.keys(info).map(key => {
        if (getElement(key)) {
            getElement(key).value = info[key];
        }
    });
    getElement('delete').value = id;
    getElement('edit').value = id;
    formButtonDisplay(true);
}

function formButtonDisplay(block) {
    if (block) {
        getElement('edit').style.display = 'block';
        getElement('delete').style.display = 'block';
        getElement('submit').style.display = 'none';
    }
    else {
        getElement('edit').style.display = 'none';
        getElement('delete').style.display = 'none';
        getElement('submit').style.display = 'block';
    }
}

function createElements(elements, type) {
    return elements.map(element => {
        if (typeof element === 'string' || typeof element === 'number') {
            return createElement(type, { innerHTML: element });
        }
        else if (Array.isArray(element)) {
            const lists = element.map(el => createElement('li', { innerHTML: el }));
            const ul = createElement('ul', { childrens: lists });
            return createElement(type, { childrens: [ul] });
        }
    });
}

function createElement(type, { childrens, innerHTML, className, value, id }) {
    const element = document.createElement(type);
    if (innerHTML) element.innerHTML = innerHTML;
    if (childrens) element.append(...childrens);
    if (className) element.className = className;
    if (value) element.value = value;
    return element;
}

function getElement(id) {
    const element = document.getElementById(id);
    if (!element) throw new Error('Missing DOM element! #' + id);
    return element;
}

function eventHandler(element, type, fn) {
    if (!element) return;
    element.addEventListener(type, fn);
}



// availableColors: (3) ["Yellow", "Green", "Purple"]
// id: "2a6c9178-8c23-4738-b729-99b85db5ce1d"
// make: "Lincoln"
// model: "Navigator L"
// suppliers: []
// year: 2010

