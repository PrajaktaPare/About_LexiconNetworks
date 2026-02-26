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
console.log("Addition : ",calculator(4,5,"+"))
console.log("Subtraction : ",calculator(4,5," -"))
console.log("Multiplication : ",calculator(4,5," * "))
console.log("Division : ",calculator(4,5,"/"))
console.log("Subtraction: ",calculator(4,5,"--"))