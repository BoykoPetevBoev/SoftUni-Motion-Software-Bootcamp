function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

function insertionSort(elements) {

    for (let i = 1; i < elements.length; i++) {

        for (let j = i; j > 0; j--) {

            if (elements[j - 1] > elements[j]) {
                elements = swap(elements, j - 1, j);
            }

        }
    }
    return elements.join(' ');
}

console.log(
    insertionSort([6, 10, 7, 5, 2, 4, 9, 8, 3])
);