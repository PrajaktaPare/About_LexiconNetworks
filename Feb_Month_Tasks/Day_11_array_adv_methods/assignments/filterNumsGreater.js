// Filter numbers greater than a given value

function filetrNums(arr,compare){
    return arr.filter((num)=>num>compare)

}

const arr=[1,2,3,4,5,6,7,8,null,undefined,"8","9",{}]
console.log(filetrNums(arr,4))
console.log(filetrNums(arr,8))
// console.log(arr)
//null->0
//undefined,{} ->NaN
//"8"=>8

//foreach and for loop 