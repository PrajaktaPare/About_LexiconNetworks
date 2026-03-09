// Q1 Input:  let str = "hello      prajakta welcome   to lexicon";
//   Expected Output: "hello prajakta welcome to lexicon"

function output(str){
    const strArr=str.split(" ")
    // console.log(strArr)
    return strArr.filter((i)=>i).map((i)=>i.slice(0,-1)+i.slice(-1).toUpperCase()).join(" ")
    //  return str.replace(/\s+/g," ").trim()
}

let str = "hello      prajakta welcome   to lexicon";
console.log(output(str))

// Q8 const arr = [1,[2,3],[4,[5,6,[8,7,10]]]];
// Expected Output: [2,4,6,8,10]

//negative is tretaed as 0
//default is 0

const arr = [1,[2,3],[4,[5,6,[8,7,10]]]]
console.log(arr)
const arrFlat=arr.flat(-2)//assign
console.log(arrFlat)
// const evenArr=arrFlat.filter((i)=>i%2==0)
// console.log(evenArr)