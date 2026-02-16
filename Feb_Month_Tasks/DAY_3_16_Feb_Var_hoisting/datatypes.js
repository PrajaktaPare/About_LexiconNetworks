console.log("Numbers :: ")
let a = 10;         // number
console.log(a.toFixed(1))
console.log(parseInt('435px'))
console.log(parseFloat('435px'))
console.log(Math.pow(a,3))
let h=10.2 
console.log(typeof h)

console.log("")
console.log("")
console.log("Strings :: ")


let b = "hello";   // string
console.log(b.toUpperCase())
console.log(b.length)
console.log(b.includes("lo"))
console.log(b.slice(2,4))
console.log(b.repeat(2))
console.log(b.replace("hello","hii"))
console.log(b.split(""))



let c = true;      // boolean


let d = null;      // object (JS bug)


let e;             // undefined


let f = Symbol();  // symbol


let g = 10n;       // bigint


let user = { name: "Prajakta" };
let arr = [1,2,3];
function test() {}


console.log(typeof arr)

//stack and heap memory
//memory
let cc = 10;
let bb = a;
bb = 20;
console.log(cc); // 10 (copied by value)

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x); // 2 (same reference)


const userr = { role: "intern" };
// user = {} 
userr.role = "developer"; 
console.log(userr)

const newUser = { ...userr, role: "developer" };
console.log(newUser)


let nums = [1, 2, 3];

let newNums = [...nums];

newNums.push(4);

console.log(nums);    // [1, 2, 3]
console.log(newNums); // [1, 2, 3, 4]


let x = [1, 2];
let y = [3, 4];

let merged = [...x, ...y];

console.log(merged); 