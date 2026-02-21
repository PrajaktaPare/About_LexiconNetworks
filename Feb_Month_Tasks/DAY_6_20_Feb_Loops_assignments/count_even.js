// Count even numbers in array

function count_even(arr)
{
    let even_cnt=0
    for(let i of arr)
    {
        if(i%2==0){
            even_cnt++;
        }

    }
    return even_cnt
}
console.log(count_even([1,2,3,4,5,6,7,8,9,10]))