let count = 0
function inception() {
    if(count > 3) {
        return 'done!'
    }
    count++
    return inception()
}

// console.log(inception())

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns

// Factorial (!)
// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 2! = 2 * 1
// 1! = 1
// 0! = 1

function findFactorialRecursive(number) {
    if (number === 0) {
        return 1
    }
    if (number === 1) {
        return 1
    }
    if (number > 1) {
       return number * findFactorialRecursive(number-1)
    }
}

function findFactorialIterative(number) {
    if (number === 0) {
        return 1
    }
    if (number === 1) {
        return 1
    }
    let answer = number;
    for(let i = number-1; i > 1; i--) {
        console.log({i, number});
        answer *= i;
    }
    return answer
}

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciIterative(n) {
    const arr = [0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n];
}

