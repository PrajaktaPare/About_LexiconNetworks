// let a = "10";
// let b = "20";

// console.log(a + b);//string concatenation operator

// console.log(Number(a)+Number(b));//Typecasting

// parseint parsefloat diff in number calling 
// int and float(inbuilt methods)

function numConcat(n1,n2){
    if (typeof n1 && n2 == Number){
        return n1+n2
    }
    else{
        return Number(n1)+Number(n2)
    }
}

console.log(numConcat(5,4))
console.log(numConcat("2","3"))