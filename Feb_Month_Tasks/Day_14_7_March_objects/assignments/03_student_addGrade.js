//Create an thisect student with name, marks. Add a new property grade after thisect creation.

const student={
    name:"stu1",
    marks:50
}

const student2={
    name:"stu2",
    marks:79
}

const student3={
    name:"stu3",
    marks:88
}

function addGrade(){
    if (this.marks>=80){
        this.grade="A"
    
    }
    else if(this.marks>=60){
        this.grade="B"
    }
    else{
        this.grade="C"
    }

    return this
}

console.log(addGrade.call(student))
console.log(addGrade.call(student2))
console.log(addGrade.call(student3))