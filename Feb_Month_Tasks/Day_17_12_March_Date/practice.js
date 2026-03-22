
// date_full_demo.js

function createDates() {
  const now = new Date();
  const fromString = new Date("2026-03-12");
  const fromParts = new Date(2026, 2, 12, 16, 4, 11);
  const fromTimestamp = new Date(1773331297946);

  console.log("create now:", now);
  console.log("create from string:", fromString);
  console.log("create from parts:", fromParts);
  console.log("create from timestamp:", fromTimestamp);

// create now: 2026-03-13T08:11:43.296Z
// create from string: 2026-03-12T00:00:00.000Z
// create from parts: 2026-03-12T10:34:11.000Z
// create from timestamp: 2026-03-12T16:01:37.946Z
}

function getters(date) {
  console.log("getFullYear():", date.getFullYear());
  console.log("getMonth():", date.getMonth());
  console.log("getDate():", date.getDate());
  console.log("getDay():", date.getDay());
  console.log("getHours():", date.getHours());
  console.log("getMinutes():", date.getMinutes());
  console.log("getSeconds():", date.getSeconds());
  console.log("getMilliseconds():", date.getMilliseconds());
  console.log("getTime():", date.getTime());

// 2028-10-05T10:34:11.000Z

}

function setters() {
  const d = new Date();

  d.setFullYear(2028);
  d.setMonth(5);//0-12
  d.setDate(15);
  d.setHours(10);
  d.setMinutes(30);
  d.setSeconds(45);
  d.setMilliseconds(500);

  console.log("after setters:", d);
}

function formats(date) {
  console.log("toDateString():", date.toDateString());//returns only the date part of a Date object as a human-readable string
  console.log("toTimeString():", date.toTimeString());// returns the time portion of a Date object as a string, including the timezone information.
  console.log("toISOString():", date.toISOString());//ISO format in UTC universal time (+5.30 for india)
  console.log("toUTCString():", date.toUTCString());//readble
  console.log("toLocaleDateString():", date.toLocaleDateString());//only the date part formatted according to the user's locale.
  console.log("toLocaleTimeString():", date.toLocaleTimeString());//returns only the time part formatted according to locale.
  console.log("toLocaleString():", date.toLocaleString());//returns both date and time together according to locale.
}

function staticMethods() {
  console.log("Date.now():", Date.now());
  console.log("Date.parse():", Date.parse("2026-03-12"));//date string → timestamp (milliseconds).
}

function run() {
  createDates();

  const date = new Date();
  console.log(date)
  getters(date);
  setters();
  formats(d);
  staticMethods();
}

run();
