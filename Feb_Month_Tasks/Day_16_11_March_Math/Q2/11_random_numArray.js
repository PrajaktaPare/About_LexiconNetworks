// Generate 5 random numbers between 10 and 99 and store them in an array.


function generateRandomArray(count, min, max){
    const arr = []
    for(let i = 0; i < count; i++){
        // formula: Math.floor(Math.random() * (max - min + 1)) + min
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr
}

const randomNumbers = generateRandomArray(5, 10, 99)
console.log("Random numbers array (10–99) :", randomNumbers)