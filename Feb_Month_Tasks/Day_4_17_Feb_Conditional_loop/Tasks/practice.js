// if(undefined){
//     console.log("hello")

// }
// console.log("hii")

//a or b is null or undefined or both\

function f(a,b){

    if(a==2){
    return "hello"

    }
    else if(b==4){
        return "afternoon"
    }
    else if (a==3){
        return "good"
    }
    return "hii"
}

console.log(f(undefined,undefined))

// console.log(true && "hi")//hi
// console.log(true || "hi")//true
// console.log(false || "hi")//false
// //study this combinations

console.log(false && "hi");     // false
console.log("" && "hello");    // "" (empty string is falsy)
console.log(0 || 100);         // 100
console.log(null || "guest");  // "guest"
console.log(undefined && 5);   // undefined
console.log("user" && 123);    // 123
console.log(null && undefined )//null as both are falsy returns 1st falsy value
console.log(null || undefined )//If all are falsy → returns the last value