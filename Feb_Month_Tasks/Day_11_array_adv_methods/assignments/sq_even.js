// Get square of even numbers
function sqEven(arr){
    return arr.filter((num)=>num%2==0).map((num)=>num**2)
}
const nums=[1,2,3,4,5,6]
console.log(sqEven(nums))