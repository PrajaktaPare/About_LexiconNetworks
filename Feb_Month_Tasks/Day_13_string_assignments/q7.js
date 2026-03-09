// Q7 Extract Numbers Greater Than 5
// Input: let str = "2,4,6,8,3,9";
// Expected Output: [6,8,9]

function numGreater(str)
{
    const arrStr=str.split(",")
    // console.log(arrStr)
    return arrStr.map(Number).filter((i)=>i>5)
}

let str = "2,4,6,8,3,9";
console.log(numGreater(str))