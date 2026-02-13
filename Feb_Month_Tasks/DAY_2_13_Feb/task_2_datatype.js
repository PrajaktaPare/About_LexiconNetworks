// Data types define the type of value a variable holds. JavaScript is dynamically typed, meaning we don’t need to specify the data type explicitly

//primptiive dt -- string Number Boolean Undefined Null BigInt Symbol 
// Non-Primitive Data Type -- Object Array Function 


// “In JavaScript, functions are first-class objects. The typeof operator returns 'function' as a special classification, but internally functions are objects with callable behavior.”

let s="Prajakta"
console.log(s)
console.log(typeof s)

function f(){

}
console.log(typeof f);
console.log(f instanceof Object); 


const a=[1,2,3,4]
console.log(typeof a)


let obj ={
    id:1,
    name:"prajakta"
}

console.log(obj)
console.log(obj.id + " id has name "+obj.name)

//Memory allocation in objects

let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value);

// Heap Memory:
// { value: 10 }

// Stack:
// obj1 → address 0x001

// obj1 → 0x001
// obj2 → 0x001

// Primitive types are stored by value.
// Objects are stored by reference.




//dynamic typing 

let n=10
console.log(typeof n)
n="demo"
console.log(typeof n)