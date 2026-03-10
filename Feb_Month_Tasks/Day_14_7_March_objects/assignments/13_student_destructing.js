//Create an object student with name, age, course. Use destructuring to extract values.


const student={
    name:"stuName",
    age:20,
    course:"BSc CS",

}

const teacher={
    name:"stuName",
    age:20,
    course:"BSc CS", 
}

// const {nameTeacher,ageTeacher,courseTeacher}=teacher
const {name,age,course}=student
const {name:Tname,age:Tage,course:Tcourse}=teacher
console.log(name)
console.log(age)
console.log(course)

console.log(Tname)
console.log(Tage)
console.log(Tcourse)

//same key names diff objects in destructuring using alias***
