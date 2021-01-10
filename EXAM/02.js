function alphaDecay([data, n]) {

    let count = 0;
    const elements = data.split(' ');
    const used = new Array(elements.length);

    generate(elements, used, Number(n), 0);
    return count;

    function generate(elements, used, n, index) {

        if (index === n) return count++;

        for (let i in elements) {
            if (used[i]) continue;
            used[i] = true;
            generate(elements, used, n, index + 1);
            used[i] = false;
        }
    }
}

console.log(
    alphaDecay(['234 232 230', '2', ''])
);

console.log(
    alphaDecay(['109 113 234 232', '3', ''])
);


