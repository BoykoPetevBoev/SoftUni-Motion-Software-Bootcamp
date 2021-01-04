function printResult(result) {
    console.log(result.join(' '));
}

function recursion(elements, result, index) {

    if (index === elements.length) return printResult(result);

    for (let i = 0; i < elements.length; i++) {

        if (!result.includes(elements[i])) {

            result[index] = elements[i];
            recursion(elements, result, index + 1);
            result.pop();
        }
    }
}

function permutations(elements) {

    recursion(elements, [], 0);
}


permutations(['A', 'B', 'C']);