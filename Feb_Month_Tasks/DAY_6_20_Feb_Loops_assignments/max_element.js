// Find max element

function maxElement(arr)
{
    let max=arr[0]
    for(let i of arr)
    {
        if(i>max)
        {
            max=i
        }
    }
    return max
}

console.log(maxElement([1,2,3,4,5,6,8]))