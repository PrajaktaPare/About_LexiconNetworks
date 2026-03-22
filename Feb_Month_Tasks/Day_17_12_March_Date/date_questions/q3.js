
// 4.Question: 
// Write a function to calculate the age in years given a birthdate.
// console.log(calculateAge('1990-01-01'));

function calculateAge(d){
    const birthdate=new Date(d)
    const today=new Date()
    let yr=today.getFullYear()-birthdate.getFullYear()
    let month=today.getMonth()-birthdate.getMonth()
    let days=today.getDate()-birthdate.getDate()
    
    if(days<0){
        month --
        const currentDay=new Date(today.getFullYear(),today.getMonth(),0).getDate()
        days=days+currentDay
    }

    if(month<0){
        yr--
        month=month+12

    }

    return `${yr} years ${month} months ${days} days`
}
console.log(calculateAge("2003-12-19"))