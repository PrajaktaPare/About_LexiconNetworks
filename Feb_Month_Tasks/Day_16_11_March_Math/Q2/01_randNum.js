// Generate a random number between 1 and 100 using Math.random().

function randomNum(){
    return Math.floor(Math.random()*(100-1+1))+1
}

console.log(randomNum())