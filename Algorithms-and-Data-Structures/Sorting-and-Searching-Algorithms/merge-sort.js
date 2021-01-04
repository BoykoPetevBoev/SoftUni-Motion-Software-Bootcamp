function splitArray(elements) {
    
    if (elements.length === 1) return elements;

    const half = Math.floor(elements.length / 2);
    const firstPart = elements.slice(0, half);
    const secondPart = elements.slice(half);

    return mergeArray(splitArray(firstPart), splitArray(secondPart));
}

function mergeArray(firstArr, secondArr) {
    let firstIdx = 0;
    let secondIdx = 0;
    const elements = new Array(firstArr.length + secondArr.length);

    const addFromFirstArr = (i) => {
        elements[i] = firstArr[firstIdx];
        firstIdx++;
    }
    const addFromSecondArr = (i) => {
        elements[i] = secondArr[secondIdx];
        secondIdx++;
    }

    for (let i = 0; i < elements.length; i++) {

        if (!firstArr[firstIdx]) addFromSecondArr(i);
        else if (!secondArr[secondIdx]) addFromFirstArr(i);
        else if (firstArr[firstIdx] < secondArr[secondIdx]) addFromFirstArr(i);
        else if (secondArr[secondIdx] < firstArr[firstIdx]) addFromSecondArr(i);
    }
    return elements;
}

function mergeSort(elements) {
    const sorted = splitArray(elements);
    return sorted.join(' ')
}

console.log(
    mergeSort([6, 10, 7, 5, 2, 4, 9, 8, 3])
);