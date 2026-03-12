// Write a function that rounds a decimal number to the nearest integer using Math.round().

function roundNum(num){
    return Math.round(num)
}

console.log(roundNum(5.4))//4
console.log(roundNum())
console.log(roundNum("8.7"))
console.log(roundNum(null))
console.log(roundNum(undefined))
console.log(roundNum(""))
console.log(roundNum(0))
console.log(roundNum(true))
console.log(roundNum(false))
