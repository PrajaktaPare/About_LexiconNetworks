
// JavaScript runs code in two phases: Memory Creation (hoisting) and Execution

// Hoisting with var


var a = 10;
console.log("a:", a);

console.log("b before init:", b); // var is hoisted as undefined
var b = 10;
console.log("b after init:", b);//10

// Hoisting with let (TDZ)

console.log("c after init:", cc);
let cc = 20; 


// var is not block-scoped (leaks outside)
if (true) {
  console.log("count before init:", count); // undefined
  var count = 5;
}
console.log("count outside block:", count); // accessible here

// let is block-scoped
if (true) {
  let temp = 3;
  console.log("temp inside block:", temp);
}
// var hoisting
var a = 10;
console.log("a:", a);

console.log("b before init:", b); // undefined (hoisted)
var b = 10;
console.log("b after init:", b);

// let (no access before init)
let c = 20;
console.log("c after init:", c);

// var is not block-scoped (leaks)
if (true) {
  var count = 5;
}
console.log("count outside block:", count); // 5

// let is block-scoped
if (true) {
  let temp = 3;
  console.log("temp inside block:", temp);
}
console.log(temp); // ReferenceError 
