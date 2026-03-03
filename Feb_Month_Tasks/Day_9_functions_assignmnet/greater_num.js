"use strict"

function greaterNum(num1,num2)
{
    // return 
    const n1=Number(num1)
    const n2=Number(num2)
    
    // console.log(typeof maxNum)
    return n1>n2?n1:n2
}


console.log(typeof greaterNum(2,3))
console.log(typeof greaterNum(2,"3"))
//returning string not num
//for both equal numbers