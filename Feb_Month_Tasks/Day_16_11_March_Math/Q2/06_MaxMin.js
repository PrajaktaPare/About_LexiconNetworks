
// Write a program that finds the maximum number from an array [12, 45, 7, 89, 34] using Math.max().
// Write a program that finds the minimum number from an array [12, 45, 7, 89, 34] using Math.min().



function maxMin(arr){
    return `Max : ${Math.max(...arr)}, Min : ${Math.min(...arr)}`
}

console.log(maxMin([12, 5, 78, 25, "89"]))