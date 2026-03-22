




// JavaScript Date stores time internally as milliseconds since:
// 1 Jan 1970
// 00:00:00 UTC

const date = new Date();

console.log("Current Date Object:", date);
console.log("Timestamp (ms since 1970):", date.getTime());

// Returns full local date and time
console.log("toString():", date.toString());

// Returns only date
console.log("toDateString():", date.toDateString());

// Returns only time
console.log("toTimeString():", date.toTimeString());

// Returns UTC formatted string
console.log("toUTCString():", date.toUTCString());

// Returns ISO format (always UTC)
console.log("toISOString():", date.toISOString());


// Localized date and time
console.log("toLocaleString():", date.toLocaleString());

// Localized date only
console.log("toLocaleDateString():", date.toLocaleDateString());

// Localized time only
console.log("toLocaleTimeString():", date.toLocaleTimeString());


console.log("US Format:", date.toLocaleDateString("en-US"));
console.log("Indian Format:", date.toLocaleDateString("en-IN"));
console.log("UK Format:", date.toLocaleDateString("en-GB"));
console.log("Japanese Format:", date.toLocaleDateString("ja-JP"));


console.log("India:",date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata",month:"long",day:"2-digit"}));

console.log("UTC:",date.toLocaleString("en-US", { timeZone: "UTC" }));

console.log("New York:",date.toLocaleString("en-US", { timeZone: "America/New_York" }));

console.log("London:",date.toLocaleString("en-GB", { timeZone: "Europe/London" }));

console.log("Tokyo:",date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));

console.log("Sydney:",date.toLocaleString("en-AU", { timeZone: "Australia/Sydney" }));



console.log(
"Custom Format:",
date.toLocaleString("en-IN", {
year: "numeric",
month: "numeric",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
timeZone: "Asia/Kolkata"
})
);

//24-hour format
console.log(
"24 Hour Time:",
date.toLocaleTimeString("en-IN", {
hour12: false
})
);

const formatter = new Intl.DateTimeFormat("en-IN", {

timeZone: "Asia/Kolkata",

dateStyle: "full",

timeStyle: "long"

});

console.log("Intl Formatter:", formatter.format(date));


// ------------------------------------------
// 10. COMMON TIMEZONES
// ------------------------------------------

// Time Zone	Full Form	Offset from UTC
// IST	India Standard Time	UTC +5:30
// UTC	Coordinated Universal Time	UTC +0:00
// EST	Eastern Standard Time (USA)	UTC -5:00
// PST	Pacific Standard Time (USA)	UTC -8:00
// CET	Central European Time	UTC +1:00
// JST	Japan Standard Time	UTC +9:00
// AEST	Australian Eastern Standard Time	UTC +10:00


// ------------------------------------------
// END OF FILE
// ------------------------------------------