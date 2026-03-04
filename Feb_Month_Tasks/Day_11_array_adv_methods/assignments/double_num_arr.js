const numarray=[1,2,3,4,5]
const strarray=[1,'2','demo',{},null,undefined]


function doubleArr(arr){
    return arr.filter((num)=>{
        return typeof num == "number"
    }).map((num)=>num*2)
}
console.log(doubleArr(numarray))
console.log(doubleArr(strarray))

function maparr(arr){
    const newarr=[]
    for (const i of arr){
        if (typeof i =="number"){
             const op=i*2
            newarr.push(op)
        }
       
    }
    return newarr
}
