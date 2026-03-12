
// Q.11 Here are some nested array of objects questions for you to solve using JavaScript:

// const company = {
//   name: "TechCorp",
//   departments: [
//     {
//       name: "Engineering",
//       employees: [
//         { id: 1, name: "Jyoti", age: 27, salary: 50000 },
//         { id: 2, name: "Arti", age: 22, salary: 45000 }
//       ]
//     },
//     {
//       name: "HR",
//       employees: [
//         { id: 3, name: "Om", age: 28, salary: 40000 },
//         { id: 4, name: "Pooja", age: 25, salary: 38000 }
//       ]
//     }
//   ]
// };

//   A): Find Employees in a Specific Department
//   Given the following company object, filter out employees who work in the "HR" department.

//   B): Find Employees with Salary Greater Than 45,000

//   C): Write a function that calculates the total salary of all employees across all departments.

//   D): Find an Employee by ID
//   Given an employee ID, return the employee's details.
//   findEmployeeById(company, 3);
//    Expected Output:
//   { id: 3, name: "Om", age: 28, salary: 40000 }

//   E): Add a New Employee to a Department
//   Write a function to add a new employee to a specific department.
//   addEmployee("Engineering", { id: 5, name: "Priyanka", age: 24, salary: 48000 });
//    Expected Output: The new employee should be added inside the Engineering department.

//   F): Convert Employee Data into an Object
//   Convert the array of employees into an object where the key is the employee's ID.
//    Expected Output:
//   {
//     1: { id: 1, name: "Jyoti", age: 27, salary: 50000 },
//     2: { id: 2, name: "Arti", age: 22, salary: 45000 },
//     3: { id: 3, name: "Om", age: 28, salary: 40000 },
//     4: { id: 4, name: "Pooja", age: 25, salary: 38000 }
//   }

//   G): Find the Oldest Employee in the Company
//   Find the oldest employee among all departments.

//   H): Remove an Employee by ID
//   Write a function to remove an employee by their ID from the nested array.
//   removeEmployeeById(3);
//    Expected Output: Employee with ID 3 should be removed from the company object.

//   I): List All Employee Names
//   Return an array containing only the names of all employees.
//    Expected Output:
//   ["Jyoti", "Arti", "Om", "Pooja"]

//   J): Count Employees in Each Department
//   Write a function that returns an object containing the count of employees in each department.
//    Expected Output:
//   {
//     Engineering: 2,
//     HR: 2
//   }


const company = {
  name: "TechCorp",
  departments: [
    {
      name: "Engineering",
      employees: [
        { id: 1, name: "Jyoti", age: 27, salary: 50000 },
        { id: 2, name: "Arti", age: 22, salary: 45000 }
      ]
    },
    {
      name: "HR",
      employees: [
        { id: 3, name: "Om", age: 28, salary: 40000 },
        { id: 4, name: "Pooja", age: 25, salary: 38000 }
      ]
    }
    // {
    //   name: "HR",
    //   employees: [
    //     { id: 3, name: "name1", age: 28, salary: 40000 },
    //     { id: 4, name: "name2", age: 25, salary: 38000 }
    //   ]
    // }
  ]
};
// console.log(company.departments[2].employees[0].name)
//  A): Find Employees in a Specific Department
//   Given the following company object, filter out employees who work in the "HR" department.
//find return that element else undefined

function getEmp(company,dept){
 return company.departments.find(d=>d.name===dept)?.employees ?? []
}

function getEmp1(company,dept){
    
    return company.departments.filter(i=>{
        console.log("112: ",i)
        }).employees
}


console.log("113 : ",getEmp1(company,"HR"))
console.log(getEmp(company,""))


// B): Find Employees with Salary Greater Than 45,000

function empSalary(obj){
    return company.departments.map((o)=>{
        return o.employees.filter(e=>{
            return e.salary>45000
        })
    })
}

console.log(empSalary(company))

//  C): Write a function that calculates the total salary of all employees across all departments.

// function totalSalary(obj){
//     let sum=0
//     obj.departments.forEach(dept=>{
//         dept.employees.forEach(emp=>{
//             sum+=emp.salary
//         })
//     })
//     return sum
// }

function totalSalary(obj){
    let sum=company.departments.flatMap(d=>d.employees).reduce((sum,emp)=>sum+emp.salary,0)
    return sum
}

console.log("Total salary of employees : ",totalSalary(company))

//  D): Find an Employee by ID
//   Given an employee ID, return the employee's details.
//   findEmployeeById(company, 3);
//    Expected Output:
//   { id: 3, name: "Om", age: 28, salary: 40000 }


function findEmployeeById(obj,id){
    let result

    obj.departments.forEach(dept=>{
        dept.employees.forEach(emp=>{
            if(emp.id === id){
                result = emp
            }
        })
    })

    return result
}

console.log("153  : ",findEmployeeById(company, 3))

// E): Add a New Employee to a Department
//   Write a function to add a new employee to a specific department.
//   addEmployee("Engineering", { id: 5, name: "Priyanka", age: 24, salary: 48000 });
//    Expected Output: The new employee should be added inside the Engineering department.

function addEmployee(originalObj,dept,obj){
    
    for(const d of originalObj.departments){
        if(d.name === dept){
            d.employees.push(obj)
        }
    }

    return obj
}

console.log(addEmployee(company,"Engineer",{ id: 5, name: "Priyanka", age: 24, salary: 48000 }))

//   F): Convert Employee Data into an Object
//   Convert the array of employees into an object where the key is the employee's ID.
//    Expected Output:
//   {
//     1: { id: 1, name: "Jyoti", age: 27, salary: 50000 },
//     2: { id: 2, name: "Arti", age: 22, salary: 45000 },
//     3: { id: 3, name: "Om", age: 28, salary: 40000 },
//     4: { id: 4, name: "Pooja", age: 25, salary: 38000 }
//   }


function convertEmployees(obj){

    const result = {}

    for(const dept of obj.departments){
        for(const emp of dept.employees){
            result[emp.id] = emp
        }
    }

    return result
}

console.log(convertEmployees(company))

// G): Find the Oldest Employee in the Company
//   Find the oldest employee among all departments.

function oldestEmployee(obj){

    let oldest = obj.departments[0].employees[0]
    // console.log("202:",oldest)//{ id: 1, name: 'Jyoti', age: 27, salary: 50000 }
    for(const dept of obj.departments){
        for(const emp of dept.employees){
            if(emp.age > oldest.age){
                oldest = emp
            }
        }
    }

    return oldest
    
}

console.log("218 : ",oldestEmployee(company))


    // H): Remove an Employee by ID
    //   Write a function to remove an employee by their ID from the nested array.
    // //   removeEmployeeById(3);
    // //    Expected Output: Employee with ID 3 should be removed from the company object.

function removeEmployeeById(obj,id){
    for(const dept of obj.departments){
        const index = dept.employees.findIndex(emp=>emp.id===id)
        console.log("225 : ",index)
        if(index!==-1){
            dept.employees.splice(index,1)
        }

    }

    return obj
}

console.log(removeEmployeeById(company,4))



// I): List All Employee Names
//   Return an array containing only the names of all employees.
//    Expected Output:
//   ["Jyoti", "Arti", "Om", "Pooja"]

function printEmpName(obj){

    const names = []

    for(const dept of obj.departments){
        for(const emp of dept.employees){
            names.push(emp.name)
        }
    }

    return names
}
//map
console.log(printEmpName(company))


// J): Count Employees in Each Department
//   Write a function that returns an object containing the count of employees in each department.
//    Expected Output:
//   {
//     Engineering: 2,
//     HR: 2
//   }


// function countEmp(obj){
//     let count=0
//     const countE={}
//     for(const dept of obj.departments){
//         countE[dept.name]=(dept.employees).length
//     }
//     return countE
// }

// console.log(countEmp(company))