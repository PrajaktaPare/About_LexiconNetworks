// Given a number 8.42, print:
// floor value
// ceil value
// truncated value
// using Math.floor(), Math.ceil(), Math.trunc().


function mathNumMethods(num){
    return `Floor : ${Math.floor(num)}\nCeil : ${Math.ceil(num)}\nTrunc : ${Math.trunc(num)}`
}

console.log(mathNumMethods(-8.42))
//Floor : 8
//Ceil : 9
//Trunc : 8