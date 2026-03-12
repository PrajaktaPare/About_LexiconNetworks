// Create a function that checks the sign of a number using Math.sign() and prints whether it is positive, negative, or zero.


function signNum(num){
    const sign=Math.sign(num)
    if(sign===1){
        return "Is Positive"
    }
    else if(sign===-1){
        return "Is Negative"
    }
    else if (sign===0 ){
        return "Is Zero"
    }
    else{
        return "Not a Number"
    }
}

console.log("10 :", signNum(10))         // 10 : Is Positive
console.log("-5 :", signNum(-5))         // -5 : Is Negative
console.log("0 :", signNum(0))           // 0 : Is Zero
console.log("-0 :", signNum(-0))         // -0 : Is Zero
console.log("'15' :", signNum("15"))     // '15' : Is Positive (string → number)
console.log("'-7' :", signNum("-7"))     // '-7' : Is Negative (string → number)
console.log("null :", signNum(null))     // null : Is Zero (null → 0)
console.log("NaN :", signNum(NaN))       // NaN : Not a Number
console.log("'' :", signNum(""))         // '' : Is Zero (empty string → 0)
console.log("'abc' :", signNum("abc"))   // 'abc' : Not a Number
console.log("true :", signNum(true))     // true : Is Positive (true → 1)
console.log("false :", signNum(false))   // false : Is Zero (false → 0)
