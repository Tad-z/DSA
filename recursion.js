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
    if(number < 2) {
        return 1
       }
    if (number > 1) {
       return number * findFactorialRecursive(number-1)
    }
}

function findFactorialIterative(number) {
   if(number < 2) {
    return 1
   }
    let answer = number;
    for(let i = number-1; i > 1; i--) {
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

function fibonacciMaster() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if(n < 2) {
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}

//Implement a function that reverses a string using iteration...and then recursion!
function reverseIterativeString(str) {
    if(!str.length) {
        return 'do better'
    }
    if(str.length === 1) {
        return str
    }
    let arr = []
    for(let i = str.length; i >= 0; i--) {
        console.log(str[i])
        arr.push(str[i])
        
    }
    return arr.join("")
}

reverseIterativeString('yoyo mastery')

function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      console.log(str.substr(1) + str.charAt(0))
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }

reverseIterativeString('yoyo mastery')
//should return: 'yretsam oyoy'

