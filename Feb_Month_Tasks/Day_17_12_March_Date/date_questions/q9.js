// 11.Question:
// convert the today into ist,gmt,pst,aest and utc format


function convertDate(){
    const date=new Date()
    const istDate=date.toLocaleString("en-IN")
    const gmtDate=date.toLocaleString("en-GB")
    const pstDate=date.toLocaleString("en-US")
    const aestDate=date.toLocaleString("en-AU")
    const utcDate=date.toUTCString()
    return `${istDate}\n${gmtDate}\n${pstDate}\n${aestDate}\n${utcDate}`
}
console.log(convertDate())