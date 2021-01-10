document.addEventListener('DOMContentLoaded', loadTable);

async function loadTable(criteria) {
    const data = await requester('GET', undefined, '');

    if (data.length === 0) return;
    if (typeof criteria === 'string') {
        data.sort((a, b) => {
            if(typeof a[criteria] === 'string') return a[criteria].localeCompare(b[criteria])
            if(typeof a[criteria] === 'number') return a[criteria] - b[criteria]
            
        });
    }
    const thead = createTableHead(Object.keys(data[0]));
    const tbody = createTableBody(data);
    const table = createElement('table', [thead, tbody]);

    thead.addEventListener('click', sortTable)

    getElement('root').innerHTML = '';
    getElement('root').append(table);
}

async function sortTable(e) {
    const value = e.target.innerHTML;
    loadTable(value);
}

async function deleteInfo(e) {
    e.preventDefault()

    await requester('DELETE', undefined, `/${e.target.value}`)

    loadTable();
}

function changeInfo(e) {
    e.preventDefault();
    const id = e.target.value;
    console.log(e.target.parentNode.value);
}

async function rowEventHandler(e) {
    const id = e.currentTarget.firstChild.innerHTML;
    const info = await requester('GET', undefined, `/${id}`);

    const values = Object.values(info).map(value => createElement('input', undefined, undefined, undefined, value));
    const keys = Object.keys(info).map((key, id) => createElement('label', [values[id]], key));

    const deleteBtn = createElement('button', undefined, 'Delete', undefined, id);
    deleteBtn.addEventListener('click', deleteInfo);

    const changeBtn = createElement('button', undefined, 'Change', undefined, id);
    changeBtn.addEventListener('click', changeInfo);

    const form = createElement('form', [...keys, deleteBtn, changeBtn]);

    getElement('form-holder').innerHTML = '';
    getElement('form-holder').append(form);
    console.log(values);

}

function createTableHead(data) {
    const th = createElements(data, 'th');
    const tr = createElement('tr', th);
    const thead = createElement('thead', [tr]);
    return thead;
}

function createTableBody(data) {
    const cols = data.map(element => createElements(Object.values(element), 'td'))
    const rows = cols.map(element => {
        const tr = createElement('tr', element, undefined, 'body-line');
        tr.addEventListener('click', rowEventHandler);
        return tr;
    })

    const tbody = createElement('tbody', rows);
    return tbody;
}

function createElements(elements, type) {
    const result = elements.map(element => createElement(type, undefined, element));
    return result
}

function createElement(type, childrens, innerHTML, className, value, id) {
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

function requester(method, body, path) {
    const url = `http://localhost:3000/cars${path}`;
    const headers = { method, body: JSON.stringify(body) };

    return fetch(url, headers)
        .then(res => res.json())
        .catch(handleErrors)
}

function handleErrors(err) {
    console.error(err);
}

// availableColors: (3) ["Yellow", "Green", "Purple"]
// id: "2a6c9178-8c23-4738-b729-99b85db5ce1d"
// make: "Lincoln"
// model: "Navigator L"
// suppliers: []
// year: 2010

