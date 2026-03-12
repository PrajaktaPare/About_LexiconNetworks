//From the current Date, print the day of the week using getDay().

function dayPrint(d){
    dayNum=d.getDay()
    // console.log(dayNum)
    switch (dayNum){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
    
}

const date=new Date()
console.log(dayPrint(date))