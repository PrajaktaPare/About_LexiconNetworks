// Q5. Generate a random number between 1 and 100 using the Math object.

// // Example: Output: 56 (random value)
//Math.floor(Math.random() * (max - min + 1)) + min


function randomNum(){
    return (Math.random()*(100-1+1))+1 
}

console.log(randomNum())