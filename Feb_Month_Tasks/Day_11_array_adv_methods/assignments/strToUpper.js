// Convert all strings to uppercase using map

function strToUpper(arr){
    return arr.map((str)=>str.toUpperCase())
}
const arr=["abc","xyz"]

console.log(strToUpper(arr))