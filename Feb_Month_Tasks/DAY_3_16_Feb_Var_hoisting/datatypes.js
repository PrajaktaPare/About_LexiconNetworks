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


let b = "hello"; 
b="hii"  // string
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


let f = Symbol();  // symbol unique identifier

console.log("")
console.log("")
console.log("Objects :: ")


let user = { id : 11,
    name: "Prajakta" };
console.log(Object.keys(user))

console.log(Object.values(user))

console.log(Object.entries(user))



console.log("")
console.log("")
console.log("Arrays :: ")
let arr = [1,2,3];
arr.reverse()//o(n) o(1)
console.log(arr)

let narr=[...arr].reverse()//o(n) o(n)
console.log(narr)

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)


console.log(typeof arr)



console.log("Memory")
//stack and heap memory
//memory
let cc = 10;
let bb = cc;
bb = 20;
console.log(cc); // 10 (copied by value)

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x); // 2 (same reference)


const userr = { role: "intern" };
userr.role = "developer"; 
console.log(userr)

const newUser = { ...userr, role: "developer" };
console.log(newUser)//creates new copy shallow copy



let nums = [1, 2, 3];

let newNums = [...nums];

newNums.push(4);

console.log(nums);    // [1, 2, 3]
console.log(newNums); // [1, 2, 3, 4]


console.log("merging")
let x = [1, 2];
let y = [3, 4];

let merged = [...x, ...y];

console.log(merged); 

console.log("Object.assign")
//Object.assign() is used for cloning an object, to merge objects with the same properties.
let obj11 = { a: 10, b: 10, c: 10 };
let obj22 = { b: 20, c: 20 };
let obj33= { c: 30 };

// Creating a target object and copying values and 
// properties to it using object.assign() method
let new_obj = Object.assign({}, obj11, obj22, obj33);

console.log(new_obj);