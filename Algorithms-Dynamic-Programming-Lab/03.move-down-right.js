function findPath(r, c, matrix) {
    
    function getMatrix(r, c){
        return new Array(r).fill(0).map(line => new Array(c).fill(0));
    }
    function fillFromLastRow(row, col) {
        matrixSum[row][col] = matrixSum[row - 1][col] + matrix[row][col];
    }
    function fillFromLastCol(row, col) {
        matrixSum[row][col] = matrixSum[row][col - 1] + matrix[row][col];
    }
    function printResult(result){
         console.log(result.map(arr => `[${arr[0]}, ${arr[1]}]`).join(' '));
    }

    const matrixSum = getMatrix(r, c);
    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {

            if (row === 0 && col === 0) matrixSum[row][col] = matrix[row][col];
            else if (row === 0) fillFromLastCol(row, col);
            else if (col === 0) fillFromLastRow(row, col);
            else if (matrixSum[row - 1][col] > matrixSum[row][col - 1]) fillFromLastRow(row, col);
            else if (matrixSum[row - 1][col] <= matrixSum[row][col - 1]) fillFromLastCol(row, col);
        }
    }

    const result = findResult(r - 1, c - 1, matrixSum);
    printResult(result);
    return result;
}

function findResult(row, col, matrix) {

    const result = [[row, col]];
    while (row !== 0 || col !== 0) {
        if (col === 0 || matrix[row - 1][col] > matrix[row][col - 1]) row--;
        else if (row === 0 || matrix[row - 1][col] <= matrix[row][col - 1]) col--;
        result.unshift([row, col]);
    }
    return result;
}

findPath(4, 4, [
    [1, 3, 2, 1],
    [5, 3, 2, 1],
    [1, 7, 3, 1],
    [1, 3, 1, 1]
]);

findPath(3, 3, [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]);

findPath(3, 3, [
    [1, 0, 6],
    [8, 3, 7],
    [2, 4, 9]
]);

findPath(3, 2, [
    [1, 0],
    [8, 3],
    [2, 9]
]);

