// let s="assignment"
// console.log(typeof s)//string

// let n=12
// console.log(typeof n)//number

// let t;
// console.log(typeof t)//undefined

// let m=null
// console.log(typeof m)//object

// function f(){

// }
// console.log(typeof f)//function
// console.log(f instanceof Object)//true


// let p=true
// console.log(typeof p)//boolean
function checkType(value) {
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "undefined":
      return "undefined";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "object":
      if (value === null) {
        return "null (object)";
      }
      return "object";
    default:
      return "unknown";
  }
}

let s = "assignment";
console.log(checkType(s));

let n = 12;
console.log(checkType(n));

let t;
console.log(checkType(t));

let m = null;
console.log(checkType(m));

function f() {}
console.log(checkType(f));
console.log(f instanceof Object);

let p = true;
console.log(checkType(p));
