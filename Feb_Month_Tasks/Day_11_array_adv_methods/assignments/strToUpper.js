// Convert all strings to uppercase using map

function strToUpper(arr){
    return arr.filter((str)=>typeof str=="string").map((str)=>str.toUpperCase())
}
const arr=["abc lmn","xyz",123]

console.log(strToUpper(arr))