//Q1. Create an object named student with properties: name, age, and grade. Print each property separately.
// Q2. Add a new property school to the student object and update its grade property.
const student={
    name:"studentName",
    age:21,
    grade:"A"
}

// console.log(student.name)
// console.log(student.age)
// console.log(student.grade)

function printProp(obj){
    let result =""
    for(const [key,value] of Object.entries(obj)){
        result+=`${key} : ${value}\n`
    }
    return result
}

function printProp1(obj){
    let result =""
    for(const i in obj){
        console.log(obj[i])
        result+=`i\n`
    }
    return result
}
console.log(printProp1(student))

student.school="Fergusson College, Pune"
student.grade="A+"

console.log(student)

