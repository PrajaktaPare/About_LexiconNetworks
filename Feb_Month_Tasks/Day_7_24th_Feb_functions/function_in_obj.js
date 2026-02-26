const user = {
  name: "PP",
  sayHi() {
    return "Hi " + this.name;
  }
};

console.log(user.sayHi());

const user1 = {
  name: "PP",
  sayHi: () => {
    return "Hi " + this.name;  
  }
};

console.log(user1.sayHi());


//constructors

function person(name) {
  this.name = name;
}

const p1 = new person("demo1");
const p2 = new person("demo2");
console.log(p1)
console.log(p2)