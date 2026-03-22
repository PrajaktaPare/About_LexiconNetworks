// 2. Student Management Dashboard

// Work with student data.

// Data:
// {
//   name,
//   marks: [80, 70, 90],
//   attendance: 85
// }
// Tasks:

const students = [
  {
    id: 1,
    name: "A",
    marks: [80, 70, 90],
    attendance: 85
  },
  {
    id: 2,
    name: "B",
    marks: [60, 75, 65],
    attendance: 72
  },
  {
    id: 3,
    name: "C",
    marks: [90, 95, 92],
    attendance: 88
  },
  {
    id: 4,
    name: "D",
    marks: [50, 55, 60],
    attendance: 60
  },
  {
    id: 5,
    name: "E",
    marks: [85, 80, 88],
    attendance: 78
  },
  {
    id: 6,
    name: "A", // duplicate name
    marks: [80, 70, 90],
    attendance: 85
  }
];

// Calculate average marks (reduce + Math.round)
function avgMarks(arr){
    return arr.map((i)=>
    {
        const sum=i.marks.reduce((acc,m)=>acc+m,0)
        return `name: ${i.name} Avg marks: ${ Math.round(sum/(i.marks.length))}`

    })

}

console.log("69 : ",avgMarks(students))

// Add grade based on marks (map + conditions)

function gradeOnMarks(arr){
    return arr.map((i)=>{
        const marks=i.marks.reduce((acc,m)=>acc+m,0)
        console.log(marks)
        return marks>0 && marks<=170?"Grade : C":marks<=250?"Grade : B":"Grade A"
    })
}

console.log("79 : ",gradeOnMarks(students))

// Filter students with attendance > 75 (filter)

function studentBasedOnAttendance(arr){
    return arr.filter((i)=>i.attendance>75)
}
console.log("86 : ",studentBasedOnAttendance(students))

// Find topper (Math.max + spread)

function findTopper(arr){
    const marks=arr.map((i)=>{
        return i.marks.reduce((acc,i)=>acc+i,0)
        })
    console.log(marks)
    const max=Math.max(...marks)
    return (arr.find((i)=>{
        const total =i.marks.reduce((acc,m)=>acc+m,0)
        return total===max
    }))
}

console.log("97 : ",findTopper(students))

// Convert names to lowercase (toLowerCase)

function nameToLowerCase(arr){
    return arr.map((i)=>i.name.toLowerCase())
}
console.log("107 : ",nameToLowerCase(students))


// Check if a student exists (includes / findIndex)

function stuExist(arr,id){
    return arr.findIndex((i)=>i.id===id)


}
console.log("116 : ",stuExist(students,2))

// Remove duplicate students (reduce or filter)

function removeDUplicate(arr){
    return arr.reduce((acc,i)=>{
        const exists = acc.some(j => j.name=== i.name);

    if (!exists) {
      acc.push(i);
    }

    return acc;
    },[])
}

console.log("131:  ",removeDUplicate(students))