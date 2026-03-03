"use strict"

function booleanOpposite(bool){
    // console.log(typeof bool)
    return !bool
}

console.log(booleanOpposite(true))
console.log(booleanOpposite(false))
console.log("arr : ",booleanOpposite([1]))
console.log(booleanOpposite({}))//it is truthy value..
//when we are negating it is about truthy and falsy values only

