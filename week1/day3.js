// Create a function called fibonacci_sequence that takes in an integer n as its parameter and returns a list of the first n numbers in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

let n = prompt('Enter Number:')

function fibonacci(n){
    const fib =[0,1]
    for(i = 2; i <= n; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib;
}

console.log(fibonacci())