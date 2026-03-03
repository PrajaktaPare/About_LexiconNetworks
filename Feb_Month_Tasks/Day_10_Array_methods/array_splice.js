const arr = [1, 2, "", {}, { id: 12 }, "pp"];
console.log("Original Array:", arr);

// slice() 
function sliceMethod(arr) {
  return arr.slice(2, 4);
}
console.log("slice(2,4):", sliceMethod(arr));
console.log("After slice:", arr); // original remains same


// splice() modifies original array (remove + insert)
function spliceMethod(arr) {
  return arr.splice(2, 1, "abc");
}
console.log("splice(2,1,'abc') removed:", spliceMethod(arr));
console.log("After splice:", arr); // original is changed


// splice() – insert only 
const arr2 = [1, 2, 3, 4];
arr2.splice(1, 0, "X", "Y");
console.log("splice insert:", arr2);


// splice() – remove only
const arr3 = ["a", "b", "c", "d"];
const removed = arr3.splice(1, 2);
console.log("splice removed:", removed);
console.log("After splice remove:", arr3);


// slice() with negative index
const arr4 = [10, 20, 30, 40, 50];
console.log("slice(-2):", arr4.slice(-2));
console.log("slice(-4,-2):", arr4.slice(-4, -2));
console.log("slice(-4,-2):", arr4.slice(-2,-4));


// slice() creates shallow copy
const objArr = [{ x: 1 }, { y: 2 }, { z: 3 }];
const copy = objArr.slice(0, 2);
console.log(copy)//[{ x: 999 }, { y: 2 }]
copy[0].x = 999;   // changing object inside slice affects original
console.log("shallow copy effect:", objArr);

let a=10
let b=a

