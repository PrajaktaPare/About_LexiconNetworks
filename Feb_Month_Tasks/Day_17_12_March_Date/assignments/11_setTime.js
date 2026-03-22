// //Create a Date object and set the time to 18:45:30.

// const date = new Date();
// console.log(date)
// date.setHours(18);
// date.setMinutes(45);
// date.setSeconds(30);
// console.log(date)

const date = new Date();
console.log(date)
date.setHours(18, 45, 30);//as it returns in UTC format so here it is returning this as 13:15:30
console.log(date);//T18:45:30

// PS D:\About_LexiconNetworks\Feb_Month_Tasks\Day_17_12_March_Date\assignments> node .\11_setTime.js
// 2026-03-13T05:41:17.321Z
// 2026-03-13T13:15:30.321Z

date.setHours(24, 60, 30);
console.log(date.toLocaleString())
//check for 24 hours 60 minutes and 60 seconds
//set get month different
//timezone GMT +5:30 in india diif in timezones