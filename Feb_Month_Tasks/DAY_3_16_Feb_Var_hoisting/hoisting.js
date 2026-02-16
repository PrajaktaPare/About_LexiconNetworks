
// JavaScript runs code in two phases: Memory Creation (hoisting) and Execution
// In memory phase, x exists as undefined.. in execution phase, it becomes 5

var a= 10
console.log(a)

console.log(b)//undefined
var b=10

console.log(c)//ReferenceError: Cannot access 'c' before initialization
let c=20


if (true) {
  console.log(count); 
  var count = 5;
}