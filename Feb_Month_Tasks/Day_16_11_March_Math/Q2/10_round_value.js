// Given an array [4.2, 6.7, 2.3, 9.8], create a new array with all values rounded down using Math.floor().

function arrRound(arr){
    return arr.map((i)=>Math.floor(i))
}

console.log(arrRound([4.2, 6.7, 2.3, 9.8]))