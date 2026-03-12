// Q7. Create a program to find the maximum and minimum numbers from an array using Math.max() and Math.min().

// // Example: Input [12, 5, 78, 25, 89], Output: Max: 89, Min: 5

function maxMin(arr){
    return `Max : ${Math.max(...arr)}, Min : ${Math.min(...arr)}`
}

console.log(maxMin([12, 5, 78, 25, 89]))