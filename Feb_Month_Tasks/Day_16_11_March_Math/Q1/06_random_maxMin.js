// Q6. Write a JavaScript program to generate a random number between two given values (min and max).

// // Example: Input min = 10, max = 50, Output: 27 (random value)

function rmdNum(max,min){
    return Math.floor(Math.random()*(max-min+1))+min
}

console.log(rmdNum(50,10))