// Reverse a string using loop

function reverse_str(str)
{
    let rev=""
    for(let i =str.length-1;i>=0;i--)
    {
        rev+=str[i]
    }
    return rev
}

console.log(reverse_str("hello"))