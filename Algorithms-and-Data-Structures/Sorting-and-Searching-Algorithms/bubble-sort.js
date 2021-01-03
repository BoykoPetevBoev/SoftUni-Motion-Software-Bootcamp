function swap(arr, first, second) {
    const firstElement = arr[first];
    arr[first] = arr[second];
    arr[second] = firstElement;
    return arr;
}

function bubbleSort(elements) {

    elements.map((num, end) => {

        for (let i = 1; i < elements.length - end; i++) {

            if (elements[i - 1] > elements[i]) {
                elements = swap(elements, i - 1, i);
            }

        }
    })

    return elements.join(' ');
}

console.log(
    bubbleSort([6, 10, 7, 5, 2, 4, 9, 8, 3])
);