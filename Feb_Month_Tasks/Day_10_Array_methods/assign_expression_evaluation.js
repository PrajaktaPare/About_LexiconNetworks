"use strict"

"4+5"//assign

function streval(str){
    let operators="+-*/"
    let i,operator
    for( i of str){
        if (operators.includes(i)){
            // console.log(i)
            operator=i
        console.log(operator)
    }
}
let expression=str.split("+")
console.log(expression);

if(expression.length<2){
    return "Invalid Expression"
}
else{
    console.log("else")
    return calculator(expression[0],expression[1],operator)
}

    
}

streval("4+5")

function calculator(num1,num2,operator){
    // console.log("operator: ",operator.trim())
    switch(operator.trim()){
        case "+":
            return num1+num2
        
        case "-":
            return num2-num1
        
        case "*":
            return num1*num2
        
        case "/":
            return num1/num2
        
        default:
            return "Invalid Operator"
    }
}
// console.log("Addition : ",calculator(4,5,"+"))
// console.log("Subtraction : ",calculator(4,5," -"))
// console.log("Multiplication : ",calculator(4,5," * "))
// console.log("Division : ",calculator(4,5,"/"))
// console.log("Subtraction: ",calculator(4,5,"--"))