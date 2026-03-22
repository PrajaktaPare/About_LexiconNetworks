// 8.Question: 
// Write a JavaScript function to count the number of days passed since beginning of the year.
// Test Data :
// console.log(days_passed(new Date(2015, 0, 15)));
// 15
// console.log(days_passed(new Date(2015, 11, 14)));
// 348

function countDays(yr,mm,dd){
    const d=new Date(yr,mm,dd)
    const start=new Date(d.getFullYear(),0,1)
    return (Math.floor(((d-start)+1)/(1000*60*60*24)))+1
}

console.log(countDays(2015, 0, 15))
console.log(countDays(2015, 11, 14))