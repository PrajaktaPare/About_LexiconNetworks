let arr = [1, 2, 3, 4];

arr.length = 2;
console.log(arr); // [1, 2] 

const newarr=[1,2]
newarr[5]=null
console.log(newarr.length)
console.log(newarr)

arr.name="numArray"
console.log(Array.isArray(arr))
console.log("Array name : ",arr.name)
let a="[]"
console.log("15 : ",Array.isArray(a))
