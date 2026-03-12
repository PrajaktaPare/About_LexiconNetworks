// Q2. Create a program that takes a number as input and returns its square root using the Math object.

// // Example: Input 25, Output: 5


const num=25
const num2=34
const num3="16"
function sqRoot(num){
    return Math.sqrt(num)
}

console.log("sq root of 5 : ",sqRoot(num))
console.log("sq root of 34 : ",Number(sqRoot(num2).toFixed(2)))
console.log('sq root of "16" : ',sqRoot(num3))