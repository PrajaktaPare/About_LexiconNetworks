//Create a Date object representing the current date and time and print it.


// const date=new Date()//Local time
// console.log(date)

//Create a Date object for 15 August 2024 at 10:30:00 AM using the numeric constructor.

const date = new Date(2024, 7, 15, 10, 30, 0);//Local time
console.log(date);
console.log(Date(date.getTime()))
//Create a Date object using the string format "2026-03-12" and print it.

// const date= new Date("2026-03-12")//treated as UTC.. not local time
// console.log(date)