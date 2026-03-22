// 1.Question:
// Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
 
function getCurrentDateTime(){
    const date=new Date()
    // return date.toLocaleString("en-ca",{
    //     year:"numeric",
    //     month:"2-digit",
    //     day:"2-digit",
    //     hour:"2-digit",
    //     hour12:false,
    //     minute:"2-digit",
    //     second:"2-digit"
    // }).replace(","," ")


    const d = date.toLocaleDateString("en-CA")
    // console.log(d)   
    const t = date.toLocaleTimeString("en-GB",{hour12:false})
    // console.log(t)
    return `${d} ${t}`
}

console.log(getCurrentDateTime())