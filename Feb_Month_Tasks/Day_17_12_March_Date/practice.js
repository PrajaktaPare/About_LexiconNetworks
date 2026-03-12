
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
}

function setters() {
  const d = new Date();

  d.setFullYear(2028);
  d.setMonth(5);
  d.setDate(15);
  d.setHours(10);
  d.setMinutes(30);
  d.setSeconds(45);
  d.setMilliseconds(500);

  console.log("after setters:", d);
}

function formats(date) {
  console.log("toDateString():", date.toDateString());
  console.log("toTimeString():", date.toTimeString());
  console.log("toISOString():", date.toISOString());
  console.log("toUTCString():", date.toUTCString());
  console.log("toLocaleDateString():", date.toLocaleDateString());
  console.log("toLocaleTimeString():", date.toLocaleTimeString());
  console.log("toLocaleString():", date.toLocaleString());
}

function staticMethods() {
  console.log("Date.now():", Date.now());
  console.log("Date.parse():", Date.parse("2026-03-12"));
}

function run() {
  createDates();

  const d = new Date();

  getters(d);
  setters();
  formats(d);
  staticMethods();
}

run();
