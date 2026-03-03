"use strict"

function compareOperators(a, b) {
  return {
    looseEquality: a == b,
    strictEquality: a === b
    
  };
}
let var1=null
let var2

let result=compareOperators(5,"5")
let result1=compareOperators(0,{})
let result2=compareOperators(var2,var1)



// console.log("Loose Equality for 5 and '5':", result.looseEquality);
// console.log("Strict Equality for 5 and '5' :", result.strictEquality);

console.log("Loose Equality for null and undefined:", result2.looseEquality);
console.log("Strict Equality for 0 and {} :", result2.strictEquality);

// console.log("Loose Equality for 0 and {id :1}:", result.looseEquality);
// console.log("Strict Equality for 0 and {id:1} :", result.strictEquality);

// console.log("Loose Equality for 0 and [] :", result.looseEquality);
// console.log("Strict Equality for 0 and [] :", result.strictEquality);