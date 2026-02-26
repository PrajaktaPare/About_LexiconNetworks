function arraySum(...arr)//rest operator
{   
    console.log("->",arr)
    //[1,2,3,4] //
    // return arr.reduce((sum,c)=>sum+c,0)
}
arraySum(1,2,3,4)//10
arraySum({name:"abc"},{name:"xyz"})//[{name:"abc"},{name:"xyz"}]
const a={
    name:"abc",
    
}
const b={
    id:1
}
console.log(arraySum(...a,...b))//{name:"abc",id:1}
console.log(arraySum({...a,...b}))//


// let arr=[1,2,3,4,5]
// console.log(...arr)
// console.log(arraySum(...arr))//spread operator 1 2 3 4 5 