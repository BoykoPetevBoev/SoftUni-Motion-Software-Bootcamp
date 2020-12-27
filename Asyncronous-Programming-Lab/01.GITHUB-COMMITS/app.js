getElement('load').addEventListener('click', loadCommits);

async function loadCommits() {
    const username = getElement('username').value;
    const repo = getElement('repo').value;

    if (!username || !repo) return;

    const data = await getData(username, repo);
    const domElements = Array.isArray(data)
        ? data.map(obj => dataHandler(`${obj.commit.author.name}: ${obj.commit.message}`))
        : [dataHandler(`Error: 404(${data.message})`)]

    appendInfo('commits', domElements);
}

function dataHandler(message) {
    const element = document.createElement('li');
    element.innerHTML = message;
    return element;
}

function appendInfo(parentId, arrayOfElements) {
    const ul = getElement(parentId);
    ul.innerHTML = '';
    ul.append(...arrayOfElements);
}

function getElement(id) {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Missing DOM element #${id}`);
    }
    return element;
}

function getData(username, repo) {
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    return fetch(url)
        .then(res => res.json())
        .catch(e => console.error(e))
}