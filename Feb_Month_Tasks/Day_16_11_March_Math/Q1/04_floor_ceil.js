// Q4. Write a program to find the floor and ceiling values of a floating-point number.

// // Example: Input 3.8, Output: Floor: 3, Ceil: 4

const num=3.8

function roundCeil(num){
    return  `Floor : ${Math.floor(num)} Ceil : ${Math.ceil(num)} `
}

console.log(roundCeil(num))

