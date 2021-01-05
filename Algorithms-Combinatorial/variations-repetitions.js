function print(result) {
    console.log(result.join(' '));
    return result;
}

function recursion(elements, result, index) {

    if (index === result.length) return print(result);

    for (let i = 0; i < elements.length; i++) {
        result[index] = elements[i];
        recursion(elements, result, index + 1);
    }
}

function variations(elements, n) {
    const result = new Array(n);
    recursion(elements, result, 0);
}

variations(['A', 'B', 'C'], 2);