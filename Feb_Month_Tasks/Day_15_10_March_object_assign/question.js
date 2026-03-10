// Q1. Create an object named student with properties: name, age, and grade. Print each property separately.
// Q2. Add a new property school to the student object and update its grade property.
// Q3. Write a function that takes an object as an argument and prints all its keys and values.
// Q4. Create an object car with properties: brand, model, and year. Delete the year property and print the updated object.
// Q5. Create an array of objects named employees, where each object has id, name, and salary. Print the names of all employees.
// Q6. Find an employee from the employees array whose salary is greater than 50,000.
// Q7. Write a function that takes an array of objects and returns the total sum of all salaries.
// Q8. Sort the employees array in ascending order based on salary.
// Q9. Given the following object:
// let library = {
//     books: [
//         { title: "The Alchemist", author: "Paulo Coelho", available: true },
//         { title: "Atomic Habits", author: "James Clear", available: false },
//         { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", available: true }
//     ]
// };
//   A) Print the author of the second book.
//   B) Find all books that are available.
//   C) Add a new book { title: "Deep Work", author: "Cal Newport", available: true } to the library.

// Q10. Create an object company with the following structure:
// let company = {
//     name: "TechCorp",
//     location: "New York",
//     employees: {
//         manager: { name: "Alice", age: 40 },
//         developer: { name: "Bob", age: 30 },
//         intern: { name: "Charlie", age: 22 }
//     }
// };
//   A)Print the name of the manager.
//   B)Update the intern’s age to 23.
//   C)Add a new employee named David as a designer.

// Q.11 Here are some nested array of objects questions for you to solve using JavaScript:

// // // const company = {
// //   name: "TechCorp",
// //   departments: [
// //     {
// //       name: "Engineering",
// //       employees: [
// //         { id: 1, name: "Jyoti", age: 27, salary: 50000 },
// //         { id: 2, name: "Arti", age: 22, salary: 45000 }
// //       ]
// //     },
// //     {
// //       name: "HR",
// //       employees: [
// //         { id: 3, name: "Om", age: 28, salary: 40000 },
// //         { id: 4, name: "Pooja", age: 25, salary: 38000 }
// //       ]
// //     }
// //   ]
// // };

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

Q12. Given the employee array below, solve the following questions using arrays and objects in JavaScript: -----(Solved)------
const employee = [
    { id: 1, firstname: "jyoti",lastname:'Chavan',age: 27,salary:30000},
    { id: 2, firstname: "Arti",lastname:'adhikari',age: 22,salary:22000},
    { id: 3, firstname: "Om",lastname:'Almale',age: 28,salary:25000 },
    { id: 4, firstname: "Priyaka",lastname:'Kulkarni',age: 24, salary:32000},
    { id: 6, firstname: "Pooja",lastname:'Chavan',age: 20, salary:35000 }
  ];

   A) How can you filter employees who are older than 25 years?
   B) How can you remove the employee with id: 3?
   C) How can you add a new employee with id: 5, having the same properties as other employees, to the employee array right after the employee with id: 4?
   D) How can you find an employee named "Om"?
   E) How can you convert the array to an object with id as the key?
   F) How can you create an array of full names of employees?
   G) How can you find the employee with the highest salary?
   H) How can you find employees whose age is less than 25 and salary is greater than 30,000?
   I) How can you increase the salary by 10,000 for employees whose age is greater than 25?
   J) How can you calculate the total salary of all employees? 


