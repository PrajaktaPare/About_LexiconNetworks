"use strict"
function spreadOperator(...arr){
    console.log(arr)//[5,10,15]
}

const arr=[5,10,15]
console.log(...arr)//5,10,15
spreadOperator(...arr)