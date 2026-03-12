// From the current Date, print:
// hours
// minutes
// seconds

function getDateDayMonth(d){
    return `Date : ${d}\nHour : ${d.getHours()}\nMinutes : ${d.getMinutes()}\nSeconds : ${d.getSeconds()}`
}

const date=new Date();

console.log(getDateDayMonth(date))