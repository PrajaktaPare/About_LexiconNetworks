let message;
message = 'Hello!';

console.log(message)

let user = 'John', age = 25, msg = 'Hello';
console.log(user)

// Variables named apple and APPLE are two different variables.

// difference between let var const

// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
// let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
// const: Declares block-scoped variables that cannot be reassigned after their initial assignment.

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a);
console.log(b);//not defined
console.log(c);

// JS moves declarations to the top of scope during compilation.

console.log(a); // undefined
var a = 10;

var a;
console.log(a);
a = 10;


//let let and const are hoisted but not initialized | Accessing before declaration throws error | This prevents accidental bugs in production
console.log(b); // ReferenceError
let b = 10;

let x;
console.log(x); // undefined
console.log(y); // ReferenceError: y is not defined like it is not in the memory