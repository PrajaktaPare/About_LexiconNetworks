//Milliseconds since
// 1 Jan 1970
// 00:00:00 UTC


  const now = new Date();
  const fromString = new Date("2026-03-12");
  const fromParts = new Date(2026, 2, 12, 16, 4, 11);//IST -> UTC
  const fromTimestamp = new Date(1773331297946);//UTC

  console.log("create now:", now);//UTC time zone 
  console.log("create from string:", fromString);//UTC midnoght
  console.log("create from parts:", fromParts);
  console.log("create from timestamp:", fromTimestamp);

// const date = new Date(2026, 32, 35,16,4,11);

// 32 months after January 2026
// 32 months ÷ 12 = 2 years + 8 months

// 35 - 30 = 5
//5 October 2028

// console.log(date);

  const date = new Date();
  console.log(date)
  //get always returns in IST if we want UTC then getUTCFullYear()
  console.log("getFullYear():", date.getFullYear());
  console.log("getMonth():", date.getMonth());//0-11
  console.log("getDate():", date.getDate());//Day of month (1-31)
  console.log("getDay():", date.getDay());//Day of week (0-6)
  console.log("getHours():", date.getHours());
  console.log("getMinutes():", date.getMinutes());
  console.log("getSeconds():", date.getSeconds());
  console.log("getMilliseconds():", date.getMilliseconds());
  console.log("getTime():", date.getTime());


  //format method
// Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
function getCurrentDateTime(){
  const date=new Date()

  const year=date.getFullYear()
  // console.log(year)
  let month=date.getMonth()+1
  // console.log(month)

  let day=date.getDate()
  // console.log(day)
  
  let hours=date.getHours()
  // console.log(hours)

  let minutes=date.getMinutes()
  // console.log(minutes)

  let seconds=date.getSeconds()
  // console.log(seconds)

  month=month<10 ? "0"+month : month
  console.log(month)
  day=day<10 ? "0"+day : day
  hours=hours<10 ? "0"+hours : hours
  minutes=minutes<10 ? "0"+minutes : minutes
  seconds=seconds<10 ? "0"+seconds : seconds
  

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

}
console.log("date format : ",getCurrentDateTime())

const date1 = new Date();

console.log("77 : ",
date1.toLocaleString("en-CA"
// year:"numeric",
// month:"2-digit",
// day:"2-digit",
// hour:"2-digit",
// minute:"2-digit",
// second:"2-digit",
// hour12:false
// })
).replace(","," "));


//setters
// setMilliseconds(1000)	+1 second
// setSeconds(60)	+1 minute
// setMinutes(60+)	+hours
// setHours(24)	+1 day
// setMonth(12+)	+years
  const d = new Date();
  console.log(d)//UTC -5.30
  d.setFullYear(2028);
  d.setMonth(13);//0-11//13 months after January//feb
// 0	Jan
// 1	Feb
// 2	Mar
// 3	Apr
// 4	May
// 5	Jun
// 6	Jul
// 7	Aug
// 8	Sep
// 9	Oct
// 10	Nov
// 11	Dec
  d.setDate(15);//1-31
  d.setHours(24);//0 – 23////Feb 16 2029 00:xx:xx
  d.setMinutes(60);//0-59//01:00
  d.setSeconds(45);
  d.setMilliseconds(500);

  console.log("after setters:", d);



//in built methods for changing timezones from UTC to other to formats methods any kind of parameter we have to pass

// IST	India Standard Time	UTC +5:30
// UTC	Coordinated Universal Time	UTC +0:00
// EST	Eastern Standard Time (USA)	UTC -5:00
// PST	Pacific Standard Time (USA)	UTC -8:00
// CET	Central European Time	UTC +1:00
// JST	Japan Standard Time	UTC +9:00
// AEST	Australian Eastern Standard Time	UTC +10:00