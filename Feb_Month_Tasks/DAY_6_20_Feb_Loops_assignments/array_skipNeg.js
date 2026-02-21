// Skip negative numbers from array

function printPosArray(arr)
{
    for(let i of arr){
        if(i<0)
        {
            continue
        }
        console.log(i)
    }
}

printPosArray([1,2,-5,9,-7,-6])