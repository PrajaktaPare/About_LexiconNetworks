function addNumbers(...num)
{
    return num.reduce((sum,i)=>
        {if(typeof i!=="number")
            {return sum}
        return sum+i},0)
}
console.log(addNumbers(1,2,3,4))
console.log(addNumbers())
console.log(addNumbers(1,2))
console.log(addNumbers("1","2"))