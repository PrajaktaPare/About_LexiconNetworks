// // Find product of numbers using reduce

function arr_product(arr){
    return arr.reduce((curr,num)=>curr*num,1)
}

const arr=[1,2,3,4]
const strarr=["abc",1]
console.log(arr_product(arr))
console.log(arr_product(strarr))//conversion 

// console.log([].reduce((curr,i)=>curr+i))
// console.log([].reduce((curr,i)=>curr+i,0))

//map reduce filter forEach internal working functionality
