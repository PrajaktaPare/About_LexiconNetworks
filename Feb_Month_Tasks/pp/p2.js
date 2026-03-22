// const company = {
//   departments: [
//     {
//       name: "Engineering",
//       employees: [
//         { name: "A", salary: 50000 },
//         { name: "B", salary: 60000 }
//       ]
//     },
//     {
//       name: "HR",
//       employees: [
//         { name: "C", salary: 40000 }
//       ]
//     }
//   ]
// }

// //print names
// function printNames(obj){
//     let str=""
//     for(const i of obj.departments){
//         for(const j of i.employees){
//             str+=j.name+"\n"
//         }
//     }
//     return str
// }
// console.log(printNames(company))

// function totalSalary(obj){
//     let sum =0
//     for(const i of obj.departments){
//         for(const j of i.employees)
//             sum+=j.salary
//     }
//     return sum
// }
// console.log(totalSalary(company))
const company = {
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "A", salary: 50000 },
        { name: "B", salary: 60000 }
      ]
    },
    {
      name: "HR",
      employees: [
        { name: "C", salary: 40000 }
      ]
    }
  ]
}
function highSalary(obj){
    const salary=obj.departments.flatMap((i)=>i.employees).map((i)=>i.salary)
    // console.log(salary)
    return Math.max(...salary)
    
}
console.log(highSalary(company))