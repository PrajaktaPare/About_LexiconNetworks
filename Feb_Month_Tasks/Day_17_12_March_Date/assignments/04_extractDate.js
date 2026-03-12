// From the current Date object, print the following using get methods:
// year
// month
// date

function getDateDayMonth(d){
    return `Date : ${d}\nYear : ${d.getYear()}\nMonth : ${d.getMonth()+1}\nDate : ${d.getDate()}`
}

const date=new Date();

console.log(getDateDayMonth(date))