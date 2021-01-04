function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

function sort(elements, start, end) {

    if (start >= end) return elements;

    const pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {

        if (elements[pivot] < elements[left] && elements[pivot] > elements[right]) elements = swap(elements, left, right);
        else if (elements[pivot] >= elements[left]) left++;
        else if (elements[pivot] <= elements[right]) right--;
    }

    elements = swap(elements, pivot, right);
    sort(elements, start, right - 1);
    sort(elements, right + 1, end);
    return elements.join(' ');
}

function quickSort(elements) {
    return sort(elements, 0, elements.length - 1);
}

console.log(
    quickSort([6, 10, 7, 5, 2, 4, 9, 8, 3])
);