// A && B
// Case	Result
// A truthy, B truthy	return B
// A truthy, B falsy	return B
// A falsy, B truthy	return A
// A falsy, B falsy	return A


// A || B
// Case	Result
// A truthy, B truthy	return A
// A truthy, B falsy	return A
// A falsy, B truthy	return B
// A falsy, B falsy	return B


const user = {
    name: "PP"
}

console.log(user?.name)
console.log(user?.age)

console.log(user?.name ?? "Not available")
console.log(user?.age ?? "Not available")







const newObject = `{
  "name": "TechCorp",
  "departments": [
    {
      "name": "Engineering",
      "employees": [
        { "id": 1, "name": "Jyoti", "age": 27, "salary": 50000 },
        { "id": 2, "name": "Arti", "age": 22, "salary": 45000 }
      ]
    },
    {
      "name": "HR",
      "employees": [
        { "id": 3, "name": "Om", "age": 28, "salary": 40000 },
        { "id": 4, "name": "Pooja", "age": 25, "salary": 38000 }
      ]
    }
  ]
}`;



function emp(obj){

 const data = JSON.parse(obj)

 for(const dept of data.departments){

   const employees = dept.employees.filter(e => e.salary > 40000)

   if(employees.length){

     console.log(dept.name)

     for(const emp of employees){
       console.log(emp.name)
     }

   }

 }

}