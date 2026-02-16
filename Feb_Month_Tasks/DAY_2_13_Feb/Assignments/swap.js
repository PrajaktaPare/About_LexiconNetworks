//Approach 1 -- using 3rd variable

// let a=10
// let b=20

// console.log("a : "+ a ,"b : "+ b)

// let temp=a
// a=b
// b=temp
// console.log("After Swapping : ")
// console.log("a : "+ a ,"b : "+ b)

//Approach 2 -- without 3rd variable

// let a = 10
// let b= 20

// console.log("a : "+ a ,"b : "+ b)

// a=a+b
// b=a-b
// a=a-b

// console.log("After Swapping : ")
// console.log("a : "+ a ,"b : "+ b)


function swap(a,b){
    let temp=a
    a=b
    b=temp
    return [a,b]

}
a=2
b=3
console.log(swap(a,b))