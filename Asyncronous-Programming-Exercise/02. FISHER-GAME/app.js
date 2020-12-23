function attachEvents() {
    document.addEventListener('click', handleEvent);
}
attachEvents();

function handleEvent(e) {
    const className = e.target.className
    const targets = {
        'load': listAllCatches,
        'add': createNewCatch,
        'update': (id) => updateCatch(id),
        'delete': (id) => deleteCatch(id)
    }
    if (typeof targets[className] !== 'function') return;

    className === 'update' || className === 'delete'
        ? targets[className](e.target.parentNode)
        : targets[className]();

}

async function listAllCatches() {
    const data = await requester('GET', undefined, '');
    const elements = Object
        .keys(data)
        .map(id => catcheTemplate(id, data[id]));
    getElement('catches').innerHTML = '';
    getElement('catches').append(...elements);
}

function catcheTemplate(id, obj) {
    let domElement = getElement('template').cloneNode(true);
    domElement.setAttribute('data-id', id);
    Array
        .from(domElement.children)
        .map(element => {
            if (element.tagName === 'INPUT') {
                element.value = obj[element.className];
            }
        })
    return domElement;
}

async function createNewCatch() {
    const body = createObject(getElement('addForm'))
    await requester('POST', body, '');
    listAllCatches();
}

async function updateCatch(element) {
    const id = element.getAttribute('data-id');
    const body = createObject(element);
    await requester('PUT', body, `/${id}`);
    listAllCatches();
}

async function deleteCatch(element) {
    const id = element.getAttribute('data-id');
    await requester('DELETE', undefined, `/${id}`);
    listAllCatches();
}

function createObject(element){
    return Array
        .from(element.getElementsByTagName('input'))
        .reduce((result, element) => {
            result[element.className] = element.value
            return result;
        }, {});
}

function getElement(id) {
    const element = document.getElementById(id);
    if (!element) throw new Error('Missing DOM element! #' + id);
    return element;
}

function createElement(type, content, className) {
    const element = document.createElement(type);
    if (content) element.innerHTML = content;
    if (className) element.classList.add(className);
    return element;
}

async function requester(method, body, path) {
    const url = `https://fisher-game.firebaseio.com/catches${path}.json`;
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
    return data;
}

