function defaultPara(a,b=4){
    return a+b
}

console.log(defaultPara(2,3))
console.log(defaultPara(2))


function greet(name,msg="hi"){
 return msg+" "+name
}
console.log(greet("pp","hello"))
console.log(greet("pp"))

function greet2(name="user",msg){
 return msg+" "+name
}
console.log(greet2("pp","hello"))
console.log(greet2("pp"))
