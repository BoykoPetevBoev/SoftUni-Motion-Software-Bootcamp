document.addEventListener('DOMContentLoaded', solve);

function solve() {
    eventListener(getElement('depart'), 'click', depart);
    eventListener(getElement('arrive'), 'click', arrive);
    let name = '';
    let next = 'depot';

    async function depart() {
        buttonsManager(true);
        const data = await requester(next);
        name = data.name;
        next = data.next;
        getElement('span-info').innerHTML = `Next stop ${name}`;
    }
    function arrive() {
        buttonsManager(false);
        getElement('span-info').innerHTML = `Arriving at ${name}`;
    }
}

function eventListener(element, event, fn) {
    element.addEventListener(event, fn);
}

function buttonsManager(change) {
    getElement('depart').disabled = change;
    getElement('arrive').disabled = !change;
}

function getElement(id) {
    const element = document.getElementById(id);
    if (!element) throw new Error('Missing DOM element! #' + id);
    return element;
}

async function requester(id) {
    const response = await fetch(`https://judgetests.firebaseio.com/schedule/${id}.json`);
    const data = await response.json();
    console.table(data);
    return data;
}
