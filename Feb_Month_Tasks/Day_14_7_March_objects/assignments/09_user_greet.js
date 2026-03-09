//Create an object user with name and age. Add a method greet() that prints "Hello <name>".

const user1={
    name:"user1Name",
    age:21
}

function greet(){
    return `Hello ${this.name}`
}

 console.log(greet.call(user1))