//





// Q12. Given the employee array below, solve the following questions using arrays and objects in JavaScript: -----(Solved)------
// const employee = [
//     { id: 1, firstname: "jyoti",lastname:'Chavan',age: 27,salary:30000},
//     { id: 2, firstname: "Arti",lastname:'adhikari',age: 22,salary:22000},
//     { id: 3, firstname: "Om",lastname:'Almale',age: 28,salary:25000 },
//     { id: 4, firstname: "Priyaka",lastname:'Kulkarni',age: 24, salary:32000},
//     { id: 6, firstname: "Pooja",lastname:'Chavan',age: 20, salary:35000 }
//   ];

//    A) How can you filter employees who are older than 25 years?
//    B) How can you remove the employee with id: 3?
//    C) How can you add a new employee with id: 5, having the same properties as other employees, to the employee array right after the employee with id: 4?
//    D) How can you find an employee named "Om"?
//    E) How can you convert the array to an object with id as the key?
//    F) How can you create an array of full names of employees?
//    G) How can you find the employee with the highest salary?
//    H) How can you find employees whose age is less than 25 and salary is greater than 30,000?
//    I) How can you increase the salary by 10,000 for employees whose age is greater than 25?
//    J) How can you calculate the total salary of all employees? 

const employee = [
    { id: 1, firstname: "jyoti",lastname:'Chavan',age: 27,salary:30000},
    { id: 2, firstname: "Arti",lastname:'adhikari',age: 22,salary:22000},
    { id: 3, firstname: "Om",lastname:'Almale',age: 28,salary:25000 },
    { id: 4, firstname: "Priyaka",lastname:'Kulkarni',age: 24, salary:32000},
    { id: 6, firstname: "Pooja",lastname:'Chavan',age: 20, salary:35000 }
  ];


// //    A) How can you filter employees who are older than 25 years?

// function filterEmp(arr){
//     return arr.filter(emp=>emp.age>25)
// }

// console.log(filterEmp(employee))

// //    B) How can you remove the employee with id: 3?


// function removeEmp(arr,id){
//     const index = arr.findIndex(emp => emp.id === id)
//     console.log("43 : ",index)
//     if(index!==-1){
//         arr.splice(index,1)
//     }
//     return arr
// }

// console.log(removeEmp(employee,3))


// //    C) How can you add a new employee with id: 5, having the same properties as other employees, to the employee array right after the employee with id: 4?

// function addEmployee(arr){
//     const index = arr.findIndex(emp => emp.id === 4)

//     arr.splice(index + 1, 0, {
//         id:5,
//         firstname:"demoName",
//         lastname:"demoLName",
//         age:26,
//         salary:34000
//     })

//     return arr
// }

// console.log(addEmployee(employee))

//    D) How can you find an employee named "Om"?

function findName(arr,name){
    for(const emp of arr){
        if(emp.firstname===name){
            console.log("77")
            return emp
        }
    }
}

console.log(findName(employee,"Om"))

//    E) How can you convert the array to an object with id as the key?

function arrToObj(arr){
    const obj={}
    for (const emp of arr){
        obj[emp.id]=emp
    }
    return obj
}

console.log(arrToObj(employee))


//    F) How can you create an array of full names of employees?

function nameArr(arr){
    return arr.map(emp=>emp.firstname)
}
console.log(nameArr(employee))

//    G) How can you find the employee with the highest salary?

function empHighestSalary(arr){
    let highest = arr[0]

    for(const emp of arr){
        if(emp.salary > highest.salary){
            highest = emp
        }
    }

    return highest
}
console.log("Employee with highest salary : ",empHighestSalary(employee))

//    H) How can you find employees whose age is less than 25 and salary is greater than 30,000?

function employees(arr){
    for (const emp of arr){
        if(emp.age<25 && emp.salary>30000){
            return emp
        }
    }
}

console.log("employees whose age is less than 25 and salary is greater than 30,000 : ",employees(employee))

//    I) How can you increase the salary by 10,000 for employees whose age is greater than 25?

function increaseSalary(arr){
    for(const emp of arr){
        if(emp.age>25){
            emp.salary=emp.salary+10000
        }
    }
    return arr
}


console.log("Increase in salary : ",increaseSalary(employee))

//    J) How can you calculate the total salary of all employees? 

function totalSalary(arr){
    return arr.reduce((acc,emp)=>acc+emp.salary,0)
}

console.log("Total Salary : ",totalSalary(employee))