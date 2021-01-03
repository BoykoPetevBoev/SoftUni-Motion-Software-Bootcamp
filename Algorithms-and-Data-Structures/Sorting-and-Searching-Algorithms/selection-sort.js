function swap(arr, first, second) {
    const firstElement = arr[first];
    arr[first] = arr[second];
    arr[second] = firstElement;
    return arr;
}

function selectionSort(elements) {

    elements.map((num, target) => {
        let min = target;

        for (let curr = target + 1; curr < elements.length; curr++) {

            if (elements[min] > elements[curr]) min = curr;

        }
        elements = swap(elements, target, min);
    })

    return elements.join(' ');
}

console.log(
    selectionSort([6, 10, 7, 5, 2, 4, 9, 8, 3])
);