"use strict"

function checkMarksAttendance(marks,attendance){
    console.log(attendance>=75)
    if(marks>=60 && attendance>=75){
        return "Pass"
    }
    else{
        return "Fail"
    }
}
// console.log(checkMarksAttendance(45,90))//Fail
console.log(checkMarksAttendance(70,""))//Fail