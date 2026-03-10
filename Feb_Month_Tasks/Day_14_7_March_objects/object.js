// "use strict";

(function objectCreationAndAccess() {
  const obj = {
    name: "PP",
    "name": "demo",
    "f-name": "fname",
    age: 21,
    1: 123,
    "new key":"newKey"
  };


  //  const obj = {
  
  //   "name": "demo",
  //   "f-name": "fname",
  //   age: 21,
  //   1: 123,
  //   "new key":"newKey"
  // };
  console.log("avjdsvfdgukdsfhldsnflkds=================")
  delete obj.name
  console.log(obj.name)
  console.log(obj)
  //alias
  const {"new key":key1}=obj
  console.log(key1)
  
  const obj2 = {
    name: "PP",
    // "name": "demo",
    "f-name": "fname",
    age: 21,
    1: 123
  };
  //alias object destrcuting
  //temp delete without modifying main obj
  const {name}=obj2
  console.log("\nObject Creation & Access");
  console.log("Alias : ",name)
  // console.log("Alias arg : ",arg)
  console.log("Alias obj2 : ",obj2)

  console.log("Name:", obj.name); // demo
  console.log("Email:", obj.email); // undefined
  console.log("Special key:", obj["f-name"]); // fname
  console.log("Number key:", obj[1]); // 123
})();

(function modifyProperties() {
  const obj = { name: "demo", age: 21 };

  console.log("\nModify Properties");

  obj.email = "demo@gmail.com";
  console.log("Added email:", obj.email); // demo@gmail.com

  obj.age = 25;
  console.log("Updated age:", obj.age); // 25

  const deleted = delete obj.email;
  console.log("Delete email result:", deleted); // true
  console.log("After delete:", obj.email); // undefined
})();

(function objectMethods() {
  const obj = { name: "demo", age: 21 };

  console.log("\nObject Methods");
  console.log("Keys:", Object.keys(obj)); // ["name","age"]
  console.log("Values:", Object.values(obj)); // ["demo",21]
  console.log("Entries:", Object.entries(obj)); // [["name","demo"],["age",21]]
})();

//diff in and hasownproperty**

(function propertyChecks() {
  const obj = { name: "demo", age: 21 };

  console.log("\n Checks");
  
  
  
  //values check
  console.log("69 : ",Object.values(obj).includes("demo"));//true




  console.log("'name' in obj:", "name" in obj); // true
  console.log("'email' in obj:", "email" in obj); // false

  console.log("hasOwnProperty name:", obj.hasOwnProperty("name")); // true
  console.log("hasOwnProperty email:", obj.hasOwnProperty("email")); // false
})();

(function iterateObject() {
  const obj = { name: "demo", age: 21 };

  console.log("\nIterate Object");

  for (let [key, value] of Object.entries(obj)) {
    console.log(key, ":", value); 
    // name : demo 
    // age : 21 
  }
})();

(function nullKeyCase() {
  const obj1 = { null: "123" };

  console.log("\nNull Key Example");

  for (let [key, value] of Object.entries(obj1)) {
    console.log(key, ":", value, "type:", typeof key); 
    // null : 123 string
  }
})();


//update detelet with same key


(function computedKeys() {
  const pre = "pre";

  const objArr = {
    [pre + "name"]: "demo",
    [pre + "age"]: 1
  };

  console.log("\nComputed Keys");

  for (let [key, value] of Object.entries(objArr)) {
    console.log(key, ":", value);
    // prename : demo
    // preage : 1
  }
})();

(function dynamicKey() {
  const key = "age";

  const obj = {
    [key]: 21
  };

  console.log("\nDynamic Key");
  console.log(obj); // { age: 21 }
  console.log("Access dynamic:", obj.age); // 21
})();

(function copyObject() {
  const obj = { name: "demo", age: 21 };

  const copy = { ...obj };

  copy.newKey = "newValue";
  copy.age = 27;

  console.log("\nObject Copy");
  console.log("Copy:", copy); // { name:"demo", age:27, newKey:"newValue" }
  console.log("Original:", obj); // { name:"demo", age:21 }
})();

(function objectLength() {
  const obj = { name: "demo", age: 21 };

  console.log("\nObject Length");
  console.log("Number of properties:", Object.keys(obj).length); // 2
})();

(function typeofObject() {
  const objCheck = {};

  console.log("\ntypeof Object");
  console.log(typeof objCheck); // object
})();

(function objectAssignExample() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 4, c: 5 };

  const obj3=Object.assign({d:6},obj1, obj2);

  console.log("\nObject.assign");
  console.log(obj3); // { a:1, b:4, c:5}
})();

(function freezeExample() {
  const obj = {
    prop: 42
  };

  Object.freeze(obj);

//   obj.prop = 33;//Cannot assign to read only property 'prop' of object '#<Object>'
  console.log("prop:", obj.prop); // 42
})();

(function referenceBehavior() {
  const obj1 = { a: 1 };
  const obj2 = obj1;

  obj2.a = 10;

  console.log("\nReference Behavior");
  console.log("obj1.a:", obj1.a); // 10
})();

(function objectComparison() {
  console.log("\nObject Comparison");
//   console.log({} === {}); // false
})();


//by using eual to only how to compare objects
// JSON.stringify(obj1) === JSON.stringify(obj2); 

//next JSON stringify and parse


function objectMethodExample() {

  const obj = {
    name: "demo",
    age: 20,
    show: function () {
      return this.name;
    }
  };

  return obj.show();
}

console.log(objectMethodExample()); //demo

//call //apply //bind
//


function callExample() {

  const person1 = { name: "demo1" };
  const person2 = { name: "demo2" };
  const person3 = {};

  function greet(city, country) {
    return this.name + " lives in " + city + ", " + country;
  }

  const r1 = greet.call(person1, "Mumbai", "India");
  const r2 = greet.call(person2, "London", "UK");
  const r3 = greet.call(person3, "Pune", "India");

  return [r1, r2,r3];
}

console.log(callExample());
///







///
console.log("270 : ")

const animal = { species: "Dog" };

const pet = Object.create(animal);
pet.name = "Buddy";
pet.species="Cat";
console.log(animal)
console.log("name" in pet);//true
console.log("species" in pet);//true
console.log(pet.hasOwnProperty("name"));//true
console.log(pet.hasOwnProperty("species"));//false