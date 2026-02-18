// Assign grades based on marks 
// Implement grading system using if...else
// Implement same grading using switch(true)

let marks=55;

if (marks==90){
    console.log("Grade : O")
}
else if (marks>=70 && marks<90){
    console.log("Grade : A")
}
else if(marks>=35 && marks <70){
    console.log("Grade : B")
}
else{
    console.log("C")
}

switch(true){
    case marks==90:
        console.log("O")
        break;
    case marks>=70 && marks<90:
        console.log("A")
        break;
    case marks >=35 && marks <70:
        console.log("B")
        break;
    default:
        console.log("C")
}