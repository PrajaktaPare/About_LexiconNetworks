//call stack
//web api
//callback queue

console.log("one")

setTimeout(() => {
    console.log("into 1st timeout")
}, 2000);

console.log("two")

setTimeout(() => {
    console.log("into 2nd timeout")
    
}, 4000);

console.log("three")