"use strict";

const nums = [1, 2, 3, 4, 5];   // Array literal

// new Array() constructor
const numbers = new Array(1, 2, 3);   // [1, 2, 3]
const numbersArr = new Array("3");      // creates array with length 3 (empty slots)
console.log("numbersArr length:", numbersArr);
// console.log(numbersArr);  // [ <3 empty items> ]

// Array.of() – avoids the new Array(3) confusion
//here also it creates an empty array
let consistentArray = Array.of(4,5);    // [4,5]
console.log("13 : ",consistentArray);

const anotherArray = Array.of({1:90}, 2, "3");    
console.log(anotherArray);//[{1:90}, 2, "3"]
        

const oArray = Array.of({id:1},{name:"demo"});    
console.log(oArray);

const aArray = Array.of({}, undefined, null);         // [{}, undefined, null]
console.log("aArray:", aArray);

// Array.from() – converts iterable to array
const fromString = Array.from("word");                // ["w", "o", "r", "d"]
console.log("fromString:", fromString);

// Spread operator
const Arr = [1, 2, 3, 4];
const spreadArr = [...Arr];                           // copy
console.log("spreadArr:", spreadArr);

const spreadArr1 = [...Arr, 1, 5, 6, 7];               // merge + append
console.log("spreadArr1:", spreadArr1);

// split() – string to array
const sub = "javascript,java";
const subArr = sub.split(",");                         // ["j","a","v","a","s","c","r","i","p","t"]
console.log("subArr:", subArr);


const arr = [1, 2, 3];
// arr[4] = 5;
// console.log("45 : ", arr);
// console.log("46 : ", arr.length);

arr.length=5
arr.push(10,20)
console.log(arr)
//dt of empty slot