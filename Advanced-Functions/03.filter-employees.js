function employees(data, criteria) {
    const employees = JSON.parse(data);
    const filtered = employees
        .filter(person => filterEmployees(person, criteria))
        .map((person, index) => getEmployeeInfo(person, index))
        .join('\n');
    printResult(filtered);
}

function filterEmployees(person, criteria) {
    const [criteriaKey, kriteriaValue] = criteria.split('-');
    return person[criteriaKey] === kriteriaValue;
}

function getEmployeeInfo(person, index) {
    return `${index}. ${person.first_name} ${person.last_name} - ${person.email}`;
}

function printResult(result){
    console.log(result);
}

employees(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
    }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    },
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }]`,
    "gender-Female"
)

