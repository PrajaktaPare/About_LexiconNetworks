
// Q6 Find Duplicate Words
// Input: let str = "hello hi hello bye hi";
// Expected Output: ["hello", "hi"]

let str = "hello hi hello bye hi";
function duplicateWords(str)
{
    const arr=str.split(" ")
    return arr.filter((word,index)=> 
        arr.indexOf(word) !== index && arr.lastIndexOf(word) === index
    )

}

console.log(duplicateWords(str))