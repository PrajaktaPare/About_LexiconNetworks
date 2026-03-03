"use strict";

const arrNums = [1, 2, 3, 4, 5];
const arrStr = [1, 3, "pp", "abc", "8"];
const arrObj = [1, 2, { id: 1 }, "fname", "10"];

// print
function print(arr) {
  arr.forEach(v => console.log(v));
}
print(arrNums)
// map
function map10(arr) {
  return arr.map(v => v + 10);
}

function mapNum10(arr) {
  return arr.map(v => (typeof v === "number" ? v + 10 : v));
}

// filter
function filter2(arr) {
  return arr.filter(v => v > 2);
}

function filterNum2(arr) {
  return arr.filter(v => typeof v === "number" && v > 2);
}

// reduce
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function concat(arr) {
  return arr.reduce((a, b) => a + b, "");
}

function sumNums(arr) {
  return arr.reduce((a, b) => (typeof b === "number" ? a + b : a), 0);
}

// run
console.log("Nums:");
print(arrNums);

console.log("\nStr:");
print(arrStr);

console.log("\nObj:");
print(arrObj);

console.log("\nmap10 nums:", map10(arrNums));
console.log("map10 str:", map10(arrStr));
console.log("map10 obj:", map10(arrObj));
console.log("mapNum10 obj:", mapNum10(arrObj));

console.log("\nfilter2 nums:", filter2(arrNums));
console.log("filter2 str:", filter2(arrStr));
console.log("filter2 obj:", filter2(arrObj));
console.log("filterNum2 obj:", filterNum2(arrObj));

console.log("\nsum nums:", sum(arrNums));
console.log("concat str:", concat(arrStr));
console.log("sumNums obj:", sumNums(arrObj));