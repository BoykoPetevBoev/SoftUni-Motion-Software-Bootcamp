function printResult(result) {
    console.log(result.join(' '));
    return result;
}

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

function recursion(elements,  index) {

    if (index === elements.length) return printResult(elements);

    const used = [];
    for (let i = index; i < elements.length; i++) {

        if (!used.includes(elements[i])) {

            elements = swap(elements, index, i);
            recursion(elements,  index + 1);
            elements = swap(elements, index, i);
            used.push(elements[i])
        }
    }
}

function permutations(elements) {

    recursion(elements, 0);
}


permutations(['A', 'B', 'B', 'B']);