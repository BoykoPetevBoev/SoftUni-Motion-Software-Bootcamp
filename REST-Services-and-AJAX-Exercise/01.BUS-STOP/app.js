async function getInfo() {
    const stopId = getElement('stopId').value;
    const data = await requester(stopId);

    getElement('buses').innerHTML = '';

    if(data.error){
        getElement('stopName').innerHTML = 'Error';
        return;
    }
    getElement('stopName').innerHTML = data.name;
    getElement('buses').append(...createList(data.buses));
    getElement('stopId').value = '';

    function createList(buses) {
        return Object
            .keys(buses)
            .map(bus => createElement('li', `Bus ${bus} arrives in ${buses[`${bus}`]} minutes`))
    }

    function createElement(type, value) {
        const element = document.createElement(type);

        if (value) element.innerHTML = value;
        return element;
    }

    function getElement(id) {
        const element = document.getElementById(id);
        
        if (!element) throw new Error('Missing DOM element! #' + id);
        return element;
    }

    async function requester(id) {
        const response = await fetch(`https://judgetests.firebaseio.com/businfo/${id}.json`);
        const data = await response.json();
        console.table(data);
        return data;
    }
}   