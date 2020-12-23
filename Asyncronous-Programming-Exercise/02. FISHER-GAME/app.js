document.addEventListener('DOMContentLoaded', fisherGame);

function fisherGame() {

    document.addEventListener('click', handleEvent);

    const events = {
        'load': () => listAllCatches(),
        'add': () => createNewCatch(),
        'update': (id) => updateCatch(id),
        'delete': (id) => deleteCatch(id)
    }

    function handleEvent(e) {
        const className = e.target.className;
        if (typeof events[className] !== 'function') return;
        events[className](e.target.parentNode);
    }

    async function listAllCatches() {
        const data = await requester('GET', undefined, 'catches.json');
        const elements = Object
            .keys(data)
            .map(id => catcheTemplate(id, data[id]));
        getElement('catches').innerHTML = '';
        getElement('catches').append(...elements);
    }

    function catcheTemplate(id, obj) {
        const domElement = getElement('template').cloneNode(true);
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
        const body = createObject(getElement('addForm'));
        await requester('POST', body, 'catches.json');
        listAllCatches();
    }

    async function updateCatch(element) {
        const id = element.getAttribute('data-id');
        const body = createObject(element);
        await requester('PUT', body, `catches/${id}.json`);
        listAllCatches();
    }

    async function deleteCatch(element) {
        const id = element.getAttribute('data-id');
        await requester('DELETE', undefined, `catches/${id}.json`);
        element.remove();
    }

    function createObject(element) {
        return Array
            .from(element.getElementsByTagName('input'))
            .reduce((result, element) => {
                result[element.className] = element.value;
                return result;
            }, {});
    }

    function getElement(id) {
        const element = document.getElementById(id);
        if (!element) throw new Error('Missing DOM element! #' + id);
        return element;
    }

    async function requester(method, body, path) {
        const url = `https://fisher-game.firebaseio.com/${path}`;
        const headers = { method, body: JSON.stringify(body) };

        return fetch(url, headers)
            .then(res => res.json())
            .catch(handleErrors);
    }
    
    function handleErrors(e){
        throw new Error(e)
    }
}


