// 6.Question: 
// Write a JavaScript program to check if the current date is a weekday, weekend.


function checkWeekend(d){
    const date=new Date(d)
    return date.getDay()===0 || date.getDay()===6 ? "Weekend":"Weekday"
}

console.log(checkWeekend("2026-03-16"))
console.log(checkWeekend("2026-03-15"))

//weekend inbuilt method 