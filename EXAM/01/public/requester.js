function requester(method, path, body) {
    const url = `http://localhost:3000/cars${path}`;
    const headers = { method, body: JSON.stringify(body) };

    return fetch(url, headers)
        .then(res => res.json())
        .catch(handleErrors)
}

function handleErrors(err) {
    throw new Error(err);
}

export {
    requester
} 
