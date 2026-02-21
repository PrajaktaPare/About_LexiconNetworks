// Sum array elements

function arraySum(arr)
{
    let sum=0
    for (let i of arr){
        sum+=i
    }
    return sum
}
console.log(arraySum([1,2,3,4,5]))