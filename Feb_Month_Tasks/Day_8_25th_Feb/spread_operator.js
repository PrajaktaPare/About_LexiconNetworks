// spread operator in functions//as arg and as para

function spreadOperator(...arr){
    console.log(arr)
}
const arr=[1,2,3,4]
spreadOperator(...arr)//[1,2,3,4]
//spread operator used mostly in operator arguments combination obj and array
//rest operator used mostly in function parameter in rare case

// const arr2=[2,3,4,5]
function arrowfun(arr2,...a){
    console.log("function :")
    
    console.log(a)
    console.log(arr2)
    console.log(" end")
    // console.log(a,arr2)
}
// const arr2=[2,3,4,5]
// let arr2=12
arrowfun(12,1,2,3,4)//empty 

// console.log("10:",a,...arr2)
// console.log(...arr,...arr2)//1,2,3,4,2,3,4,5
// spreadOperator(...arr,...arr2)//[1,2,3,4,2,3,4,5]

let s="pp"
console.log(...arr,...s)//1 2 3 4 p p
spreadOperator(...arr,...s)//[1,2,3,4,'p','p']

let obj={id :1,name:"pp"}
let obj2={age:21,id:1}
console.log({...obj,...obj2})//{id:1, name: 'pp', age:21}//good

console.log(...Object.values(obj));//1 pp
console.log(...Object.keys(obj));//id name
console.log(...Object.entries(obj2));//[ 'age', 21 ]




