
// Generate a random number between 20 and 50.

function randomBetween20And50(){
    const min = 20
    const max = 50
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log("Random number between 20 and 50 :", randomBetween20And50())
//without formula