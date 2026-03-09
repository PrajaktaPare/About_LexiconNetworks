// Q4 Reverse Each Word
// Input: let str = "hello jyoti";
// Expected Output: "olleh itoyj"


let str = "hello jyoti";

function reverseWord(str){
    const strArr=str.split(" ")
    const reverseStr = (strArr.map((word)=>(word.split("").reverse()).join(""))).join(" ")
    return reverseStr.replace("itoyj","hi")
    
}

console.log(reverseWord(str))

//pop() o(n)
//for loop reverse o(n)
// we cannot handle condtions more
//empty str concat
