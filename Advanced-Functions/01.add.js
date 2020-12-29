function solution(num) {
    return sumNumbers.bind(undefined, Number(num))
}
function sumNumbers(first, second) {
    return first + second;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));