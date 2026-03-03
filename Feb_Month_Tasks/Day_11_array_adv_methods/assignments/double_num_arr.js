const numarray=[1,2,3,4,5]
const strarray=[1,'2','demo',{},null,undefined]
// const doubleArr=array.map((num)=>{
//     return num*2
// })
// console.log(doubleArr)

function doubleArr(arr){
    return arr.map((num)=>num*2)
}
console.log(doubleArr(numarray))
console.log(doubleArr(strarray))

