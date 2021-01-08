class Item {
    constructor(name, weight, value) {
        this.name = name;
        this.weight = Number(weight);
        this.value = Number(value);
    }
}

function getInput(data) {
    return data.map(string => {
        const [name, weight, value] = string.split(' ');
        return new Item(name, weight, value);
    })
}

function knapsack(capacity, ...data) {

    const items = getInput(data);
    const matrix = new Array(items.length + 1).fill([]).map(row => new Array(capacity + 1).fill(0));

    for (let itemIdx = 0; itemIdx < items.length; itemIdx++) {
        for (let currCapacity = 0; currCapacity < matrix[0].length; currCapacity++) {

            const item = items[itemIdx];

            if(item.weight > currCapacity) continue;

            const excluding = matrix[itemIdx][currCapacity];
            const including = matrix[itemIdx][currCapacity - item.weight] + item.value;

            const result = Math.max(excluding, including);

            matrix[itemIdx + 1][currCapacity] = result;
        }
    }
    const maxValue = matrix[items.length][capacity];
    console.log(maxValue);
    console.table(matrix)

    for(let i = items.length; i > 0; i--){

    }
}

knapsack(
    4,
    'Item1 2 3',
    'Item2 2 1',
    'Item3 1 3',
)

// knapsack(
//     20,
//     'Item1 5 30',
//     'Item2 8 120',
//     'Item3 7 10',
//     'Item4 0 20',
//     'Item5 4 50',
//     'Item6 5 80',
//     'Item7 2 10',
// )