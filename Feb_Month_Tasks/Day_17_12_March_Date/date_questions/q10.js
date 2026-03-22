// 12.Question:
// Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
// Input : console.log(getDate(new Date("2026-03-16T05:27:18.152Z")));
// expected output : 2026-12-16 05:25:50 (date and time change according current date and time)

function getDate(date){
    
    return date.toLocaleString("en-ca",{
        year:"numeric",
        month:"2-digit",
        day:"2-digit",
        hour12:false,
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"

    }).replace(","," ")
}

console.log(getDate(new Date("2026-03-16T05:27:18.152Z")))