document.addEventListener('DOMContentLoaded', attachEvents);

function attachEvents() {
    getElement('btnLoadPosts').addEventListener('click', loadPosts);
    getElement('btnViewPost').addEventListener('click', viewPost);
}

async function loadPosts(e) {
    const data = await getData('posts.json');
    const arrayOfElements = Object
        .keys(data)
        .map(id => createElement('option', id, data[id].title));

    appendInfo('posts', arrayOfElements);
}

async function viewPost(e) {
    const id = getElement('posts').value;
    const post = await getData(`posts/${id}.json`);
    const comments = await getData('comments.json');
    const arrayOfElements = Object
        .keys(comments)
        .filter(id => comments[id].postId === post.id)
        .map(id => createElement('li', id, comments[id].text));

    getElement('post-body').innerHTML = post.body;
    appendInfo('post-comments', arrayOfElements);
}

function createElement(type, value, content) {
    const element = document.createElement(type);
    if (value) element.value = value;
    if (content) element.innerHTML = content;
    return element;
}

function appendInfo(parentId, arrayOfElements) {
    const element = getElement(parentId);
    element.innerHTML = '';
    element.append(...arrayOfElements);
}

function getElement(id) {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Missing DOM element #${id}`);
    }
    return element;
}

function getData(path) {
    const url = `https://blog-apps-c12bf.firebaseio.com/${path}`;
    return fetch(url)
        .then(res => res.json())
        .catch(e => console.error(e))
}