document.addEventListener('DOMContentLoaded', attachEvents);

function attachEvents() {
    getElement('submit').addEventListener('click', getWeather);
}

const symbols = {
    Sunny: '&#x2600',
    'Partly sunny': '&#x26C5',
    Overcast: '&#x2601',
    Rain: '&#x2614',
    Degrees: '&#176'
}

async function getWeather() {
    getElement('error').style.display = 'none';
    getElement('forecast').style.display = 'none';

    const location = getElement('location').value;
    const data = await requester('GET', 'locations.json');
    const city = data.find(obj => obj.name.toLowerCase() === location.toLowerCase());

    if (!city) {
        getElement('error').style.display = 'block';
        return;
    };

    const todayCondition = await requester('GET',  `forecast/today/${city.code}.json`);
    const upcomingCondition = await requester('GET',  `forecast/upcoming/${city.code}.json`);

    displayTodayCondition(todayCondition);
    displayUpcomingCondition(upcomingCondition);
    getElement('forecast').style.display = 'block';
}

function displayTodayCondition(condition) {

    getElement('current').innerHTML = '';

    const headerDiv = createElement('div', 'Current conditions', 'label')
    const div = createElement('div', undefined, 'forecast');
    const city = createElement('span', condition.name, 'forecast-data');
    const span = createElement('span', undefined, 'condition');
    const [symbol, weather, temp] = elementsFromData(condition.forecast);

    symbol.classList.add('condition');
    span.append(city, temp, weather);
    div.append(symbol, span);
    getElement('current').append(headerDiv, div);
}

function displayUpcomingCondition(conditions) {

    getElement('upcoming').innerHTML = '';

    const headerDiv = createElement('div', 'Three-day forecast', 'label');
    const div = createElement('div', undefined, 'forecast-info');
    conditions.forecast.map(forecast => {
        const span = createElement('span', undefined, 'upcoming');
        const [symbol, weather, temp] = elementsFromData(forecast);
        span.append(symbol, temp, weather);
        div.append(span);
    })
    getElement('upcoming').append(headerDiv, div);
}

function elementsFromData(forecast) {
    const symbol = createElement('span', symbols[forecast.condition], 'symbol');
    const weather = createElement('span', forecast.condition, 'forecast-data');
    const temp = createElement('span',
        `${forecast.low}${symbols.Degrees} / ${forecast.high}${symbols.Degrees}`,
        'forecast-data'
    );
    return [symbol, weather, temp];
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

async function requester(method, path) {
    const url = `https://judgetests.firebaseio.com/${path}`;
    const response = await fetch(url, {
        method: method,
    });
    const data = await response.json();
    console.log(data);
    return data;
}