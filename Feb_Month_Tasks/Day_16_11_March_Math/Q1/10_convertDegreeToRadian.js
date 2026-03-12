// Q10. Write a function that converts degrees into radians using the Math object.

// // Example: Input 90 degrees, Output: 1.5708 radians

function degreeToRadian(str){
    const deg=parseInt(str)
    return `${deg * (Math.PI / 180)} radians`
}

console.log(degreeToRadian("90 degrees"))


//floor repeat 

//Date object timezone working country timezones