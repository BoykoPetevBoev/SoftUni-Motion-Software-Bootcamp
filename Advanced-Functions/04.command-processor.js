function solution() {
    let string = '';
    return {
        append: (s) => {  string += s },
        removeStart: (n) => {  string = string.substr(n) },
        removeEnd: (n) => { string = string.substr(0, string.length - n) },
        print: () => { console.log(string) }
    }
}



let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();