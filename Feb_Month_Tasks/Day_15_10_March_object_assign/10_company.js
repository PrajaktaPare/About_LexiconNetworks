
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

    let company = {
        name: "TechCorp",
        location: "New York",
        employees: {
            manager: { name: "Alice", age: 40 },
            developer: { name: "Bob", age: 30 },
            intern: { name: "Charlie", age: 22 }
        }
    };

    console.log("Manager name : ",company.employees.manager.name)

    company.employees.intern.age=23

    company.employees.designer={
        name: "David", age: 25
    }

    console.log(company.employees)
