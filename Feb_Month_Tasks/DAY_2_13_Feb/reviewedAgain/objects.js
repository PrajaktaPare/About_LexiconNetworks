let user ={
    name:"Uname",
    age:22
};

user.email="uname@gmail.com"
console.log(user)

for (let n of Object.keys(user)){
    console.log(n)
}
for (let n of Object.values(user)){
    console.log(n)
}
for (let n of Object.entries(user)){
    console.log(n)
}

//merging 
console.log("merging")
let obj1 = { a: 10 };
let obj2 = { b: 20 };
let obj3 = { c: 30 };

Object.assign(obj3, obj1, obj2);
console.log(obj3);
let obj4 = { ...obj1, ...obj2 };
console.log(obj4);


let obj5=JSON.stringify(obj1)
let sobj5=JSON.parse(obj5)

console.log(obj5)
console.log(sobj5)


let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" }
];
let unique = [...new Map(arr.map(item => [item.id, item])).values()];

console.log(unique);

let unique1 = [...new Set(arr)];
console.log(unique1);//Because Set checks reference, not object content.

let nums = [1,2,3,3,4];
let unique3 = [...new Set(nums)];

console.log(unique3);