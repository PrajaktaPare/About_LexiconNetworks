// From the current Date object, print the following using get methods:
// year
// month
// date

function getDateDayMonth(d){
    return `Date : ${d}\nYear : ${d.getYear()}\nMonth : ${d.getMonth()+1}\nDate : ${d.getDate()}`
}

const date=new Date();

// From the current Date, print:
// hours
// minutes
// seconds

function getHoursMinSecMonth(d){
    return `\nHours : ${d.getHours()}\nMinutes : ${d.getMinutes()}\nSeconds : ${d.getSeconds()}`
}


console.log(getDateDayMonth(date))
console.log(getHoursMinSecMonth(date))

