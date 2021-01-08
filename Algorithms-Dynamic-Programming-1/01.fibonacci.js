function fibonacci(n) {

    const data = [0, 1, 1];
    
    const gen = (n) => {
        
        if (data[n]) return data[n];
        
        const result = gen(n - 1) + gen(n - 2);
        data[n] = result;
        return result;
    }
    return gen(n);
}

console.log(
    fibonacci(2),
    fibonacci(5),
    fibonacci(20)
);