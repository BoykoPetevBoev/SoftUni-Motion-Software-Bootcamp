function print(result) {
    console.log(result.join(' '));
    return result;
}

function recursion(elements, used, result, index) {

    if (index === result.length) return print(result);

    for (let i = 0; i < elements.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        result[index] = elements[i];
        recursion(elements, used, result, index + 1);
        used[i] = false
    }
}

function variations(elements, n) {
    const result = new Array(n);
    const used = new Array(elements.length);
    recursion(elements, used, result, 0);
}

variations(['A', 'B', 'C', 'D'], 3);