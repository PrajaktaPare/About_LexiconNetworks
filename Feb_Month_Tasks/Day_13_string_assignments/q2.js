// Q2 Remove Duplicate Characters
// Input: let str = "programming";
// Expected Output: "progamin"

let str = "programming";

function removeDuplicate(str){
    const arr=str.split("")
    return arr.filter((i,index,arr)=>arr.indexOf(i)===index).join("")

}

console.log(removeDuplicate(str))
