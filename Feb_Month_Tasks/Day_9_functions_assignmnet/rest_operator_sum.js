"use strict"

function addNumbers(...num)
{
    return num.reduce((sum,i)=> sum+i,0)
}
// console.log(addNumbers(1,2,3,4))
// console.log(addNumbers())
// console.log(addNumbers(1,2))
// console.log(addNumbers(1,2,"3"))//6 +
// console.log("true bool",addNumbers(1,2,"3",true))//7
// console.log(addNumbers(1,2,"3","true"))//true NAN

//assign
console.log(addNumbers(1,2,"3","true",{}))//error ""
console.log(addNumbers(1,2,"3","true",[]))//error ""

//here if we check 
console.log(addNumbers(1,2,"3","true",{}))//33true[object Object]
console.log({}.toString())//[object Object] 
// here 2 times Object is nothing but "object of type Object"

console.log(addNumbers(1,2,"3","true",[]))//33true
console.log([].toString())//""
// here [] gets converted to empty string ""

