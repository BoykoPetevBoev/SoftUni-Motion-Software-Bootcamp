function print(result) {
    console.log(result.join(' '));
    return result;
}

function recursion(elements, result, index, start) {

    if (index === result.length) return print(result);

    for (let i = start; i < elements.length; i++) {

        result[index] = elements[i];
        recursion(elements, result, index + 1, i + 1);
    }
}

function combinations(elements, n) {
    const result = new Array(n);
    recursion(elements, result, 0, 0);
}

combinations(['A', 'B', 'C'], 2);
combinations(['A', 'B', 'C', 'D'], 2);