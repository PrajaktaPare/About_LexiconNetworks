
// 2.Question:
// Write a function to calculate the difference in days between two given dates.
// console.log(dateDiffInDays('2024-02-29', '2024-03-05')); // Output: 5

function dateDiff(d1,d2){
    d2=new Date(d2)
    d1=new Date(d1)
    return Math.floor((d2-d1)/(1000*60*60*24))
}

console.log(dateDiff('2024-02-29', '2024-03-05'))
console.log(dateDiff("2024-03-01 10:00","2024-03-02 09:00"))