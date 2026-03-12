// Q5. Create an array of objects named employees, where each object has id, name, and salary. Print the names of all employees.
//Q6. Find an employee from the employees array whose salary is greater than 50,000.
// Q7. Write a function that takes an array of objects and returns the total sum of all salaries.
// 
const arrOfObj=[
    {
        id:1,
        name:"name1",
        salary:80000
    },
    {
        id:2,
        name:"name2",
        salary:60000
    },
    {
        id:3,
        name:"name3",
        salary:50000
    }

]

// console.log(arrOfObj[0].name)
// function printNames(arr){
//     return arr.map((obj)=>obj.name)
// }

function printNames(arr){
    let result=[]
    for(const i of arr){
        if(i.salary>50000){
            // console.log(i.name)
            result.push(i.name)
        }
    }
    return result
}
console.log(printNames(arrOfObj))

const result=arrOfObj.sort((a,b)=>b.salary-a.salary)
console.log("42 : ",result[0])

function returnSalary(arr){
    return arr.filter((obj)=>obj.salary>50000)
}

console.log(returnSalary(arrOfObj))

function sumSalary(arr){
    return arr.reduce((acc,obj)=>acc + obj.salary,0)
}   

console.log("Total salary : ",sumSalary(arrOfObj))

function sortBySalary(arr){
    return arr.sort((a,b)=>a.salary-b.salary)
}
console.log("sorted : ",sortBySalary(arrOfObj))