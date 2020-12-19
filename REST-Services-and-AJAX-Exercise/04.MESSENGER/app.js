eventListener(document, 'DOMContentLoaded', attachEvents)

function attachEvents() {
    eventListener(getElement('submit'), 'click', sendMessage);
    eventListener(getElement('refresh'), 'click', refreshMessages);
}

async function sendMessage() {
    const author = getElement('author').value;
    const content = getElement('content').value;

    if (!author || !content) return;

    await requester('POST', { author, content });
    refreshMessages();
    getElement('author').value = '';
    getElement('content').value = '';
}

async function refreshMessages() {
    const data = await requester('GET');
    const messages = Object.values(data)
        .map(msg => `${msg.author}: ${msg.content}`)
        .join('\n');
    getElement('messages').value = messages;
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

async function requester(method, body) {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json'
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
    return data;
}