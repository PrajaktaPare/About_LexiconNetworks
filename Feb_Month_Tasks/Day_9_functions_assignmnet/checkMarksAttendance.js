function checkMarksAttendance(marks,attendance){
    if(marks>=60 && attendance>=75){
        return "Pass"
    }
    else{
        return "Fail"
    }
}
console.log(checkMarksAttendance(45,90))
console.log(checkMarksAttendance(70,80))