// 7.Question: 
// Write a JavaScript function to add specified months to a date.
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10);
// Output :
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_months(date,month){
    let d=new Date(date)
    d.setMonth(d.getMonth()+month)
    return d.toString()
}

console.log(add_months("2014-10-2",10))

