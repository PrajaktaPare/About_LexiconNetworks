// Remove duplicates using filter or reduce

// function removeDuplicates(nums){
//     const arr=[]
//     for(const i of nums){
//         console.log(i)
//         if(!arr.includes(i)){
//         arr.push(i)

//         }

//     }
//     return arr
// }

function removeDuplicates(arr){
    return arr.reduce((acc,i)  =>
    {
        if(!acc.includes(i)){
            acc.push(i)
        }
        return acc
    },[])
}
const nums=[1,2,2,3,4,4,5,5,6,7]
console.log(removeDuplicates(nums))


