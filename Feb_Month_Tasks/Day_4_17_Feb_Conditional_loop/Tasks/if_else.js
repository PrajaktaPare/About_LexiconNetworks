let marks=50;

// if (marks==90){
//     console.log("Grade : O")
// }
// else if (marks>=70 && marks<90){
//     console.log("Grade : A")
// }
// else if(marks>=35 && marks <70){
//     console.log("Grade : B")
// }
// else{
//     console.log("C")
// }

switch(true){
    case marks==90:
        console.log("O")
        break;
    case marks>=70 && marks<90:
        console.log("A")
        return;
    case marks >=35 && marks <70:
        console.log("B")
        break;
    default:
        console.log("C")
}
console.log("end")
// case {} : 
//return and break why op is same pros cons
//expected A -> C
//undefined null for marks
