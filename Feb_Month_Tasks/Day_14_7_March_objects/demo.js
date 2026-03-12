"use strict";




let a = {};

let b = { key: "b" };

let c = { key: "c" };
 
a[b] = 123;//


// a={
//   "[object Object]":123//456
// }

a[c] = 456;
 
console.log(a[b]);



const obj = {a:1, b: 2 ,c:6};
console.log(obj.a + obj.b && obj.c); //3

console.log(obj.a + obj.b || obj.c); //3

// 3||6 //1st true value for or 

console.log(obj.a + obj.b && obj.c); //6
//both are true in and last value //6
// obj.c=undefined

// undefined+2=NaN falsy value

//NaN && 6 //or and operator what it returns 
//by using operator how to check keys exist or not with ? and ??


// const obj = {
//     name: "PP"
// }

// console.log(obj?.name ?? "Not available")
// console.log(obj?.age ?? "Not available")

// A && B
// How it works

// If A is falsy → return A
// If A is truthy → return B



// || returns the first truthy value
// A || B
// How it works

//If A is truthy → return A
//If A is falsy → return B





const newObject = `{
  "name": "TechCorp",
  "departments": [
    {
      "name": "Engineering",
      "employees": [
        { "id": 1, "name": "Jyoti", "age": 27, "salary": 50000 },
        { "id": 2, "name": "Arti", "age": 22, "salary": 45000 }
      ]
    },
    {
      "name": "HR",
      "employees": [
        { "id": 3, "name": "Om", "age": 28, "salary": 40000 },
        { "id": 4, "name": "Pooja", "age": 25, "salary": 38000 }
      ]
    }
  ]
}`;


function emp(obj){

 const objNew = JSON.parse(obj)

 objNew.departments.forEach(dept => {

   const result = dept.employees.filter(emp => emp.salary > 40000)

   if(result.length > 0){

     console.log("Department:", dept.name)

     result.forEach(e => {
       console.log(e.id, e.name)
     })

   }

 })

}

emp(newObject)

// function emp(obj){
//     const objNew=JSON.parse(obj)
//     // console.log(objNew)
//     objNew.departments.forEach(element => {
//       element.employees.forEach(emp=>{
//         if(emp.salary>40000){

//           console.log(emp.id,emp.name)//filter not foreach //array of obj 
//         }

//       })
      
//     });
// }

// emp(newObject)

//emp salaray >40000
//id name return department wise
//department wise output
//engineering 
//names




















// (function nestedObjectCreation() {
//   const obj = {
//     user: {
//       name: "demo",
//       age: 21,
//       address: {
//         "city": "Pune",
//         pin: 410507
//       }
//     }
//   };

//   console.log("\nNested Object Creation");
//   console.log(obj.user.name); // demo
//   console.log(obj.user.address.city); // Pune
  
//   const{user:{address : {city:cityName}}}=obj
//   console.log(cityName)

//   const{user:{name,...args}}=obj
//   console.log(args)
// })();

// (function addNestedProperty() {
//   const obj = {
//     user: {
//       name: "demo"
//     }
//   };

//   console.log("\nAdd Nested Property");

//   obj.user.age = 25;

//   console.log(obj.user.age); // 25
// })();

// (function updateNestedProperty() {
//   const obj = {
//     user: {
//       name: "demo",
//       age: 21
//     }
//   };

//   console.log("\nUpdate Nested Property");

//   obj.user.age = 30;

//   console.log(obj.user.age); // 30
// })();

// (function deleteNestedProperty() {
//   const obj = {
//     user: {
//       name: "demo",
//       age: 21
//     }
//   };

//   console.log("\nDelete Nested Property");

//   delete obj.user.age;

//   console.log(obj.user.age); // undefined
// })();

// (function iterateNestedObject() {
//   const obj = {
//     user: {
//       name: "demo",
//       age: 21
//     }
//   };

//   console.log("\nIterate Nested Object");

//   for (let [key, value] of Object.entries(obj.user)) {
//     console.log(key, value);
//     // name demo
//     // age 21
//   }
// })();

// (function nestedKeysValues() {
//   const obj = {
//     user: {
//       name: "demo",
//       age: 21
//     }
//   };

//   console.log("\nNested Object Keys/Values");

//   console.log(Object.keys(obj.user)); // ["name","age"]
//   console.log(Object.values(obj.user)); // ["demo",21]
// })();

// (function nestedObjectReference() {
//   const obj1 = {
//     user: {
//       name: "demo"
//     }
//   };

//   const obj2 = obj1;

//   obj2.user.name = "PP";

//   console.log("\nNested Reference");
//   console.log(obj1.user.name); // PP
// })();

// (function shallowCopyProblem() {
//   const obj = {
//     user: {
//       name: "demo"
//     }
//   };

//   const copy = { ...obj };

//   copy.user.name = "changed";

//   console.log("\nShallow Copy Problem");
//   console.log(copy.user.name); // changed
//   console.log(obj.user.name); // changed

//    const obj3=Object.assign({d:6},obj);
//    console.log(obj3)

// })();

// (function optionalChainingExample() {
//   const obj = {
//     user: {
//       name: "demo"
//     }
//   };

//   console.log("\nOptional Chaining");

//   console.log(obj.user.address?.city); // undefined // Cannot read properties of undefined
// })();