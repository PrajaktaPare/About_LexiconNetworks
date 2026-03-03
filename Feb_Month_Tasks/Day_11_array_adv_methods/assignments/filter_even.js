// Filter even numbers from an array

function filetrEven(arr){
    return arr.filter((num)=>typeof num==="number" && num%2==0)
}

const arr=[1,2,3,4,5,6,7,8,9,"24","66",null,{}]
console.log(filetrEven(arr))
//null->0