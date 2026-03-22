// 10.Question: 
// diff between 2015 to 2013 in month
 

function getMonth(yr1,yr2){
    return  Math.abs(yr1-yr2)*12
}

console.log(getMonth(2015,2013))
console.log(getMonth(2013,2015))