"use strict";

(function nestedObjectCreation() {
  const obj = {
    user: {
      name: "demo",
      age: 21,
      address: {
        "ci ty": "Pune",
        "city": "Pune",
        pin: 410507
      }
    }
  };

  console.log("\nNested Object Creation");
  console.log(obj.user.name); // demo
  console.log(obj.user.address.city); // Pune
  
  const{user:{address : {"ci ty":cityName}}}=obj
  console.log(cityName)

  const{user:{name,...args}}=obj
  console.log(args)
})();

(function addNestedProperty() {
  const obj = {
    user: {
      name: "demo"
    }
  };

  console.log("\nAdd Nested Property");

  obj.user.age = 25;

  console.log(obj.user.age); // 25
})();

(function updateNestedProperty() {
  const obj = {
    user: {
      name: "demo",
      age: 21
    }
  };

  console.log("\nUpdate Nested Property");

  obj.user.age = 30;

  console.log(obj.user.age); // 30
})();

(function deleteNestedProperty() {
  const obj = {
    user: {
      name: "demo",
      age: 21
    }
  };

  console.log("\nDelete Nested Property");

  delete obj.user.age;

  console.log(obj.user.age); // undefined
})();

(function iterateNestedObject() {
  const obj = {
    user: {
      name: "demo",
      age: 21
    }
  };

  console.log("\nIterate Nested Object");

  for (let [key, value] of Object.entries(obj.user)) {
    console.log(key, value);
    // name demo
    // age 21
  }
})();

(function nestedKeysValues() {
  const obj = {
    user: {
      name: "demo",
      age: 21
    }
  };

  console.log("\nNested Object Keys/Values");

  console.log(Object.keys(obj.user)); // ["name","age"]
  console.log(Object.values(obj.user)); // ["demo",21]
})();

(function nestedObjectReference() {
  const obj1 = {
    user: {
      name: "demo"
    }
  };

  const obj2 = obj1;

  obj2.user.name = "PP";

  console.log("\nNested Reference");
  console.log(obj1.user.name); // PP
})();

(function shallowCopyProblem() {
  const obj = {
    user: {
      name: "demo"
    }
  };

  const copy = { ...obj };

  copy.user.name = "changed";

  console.log("\nShallow Copy Problem");
  console.log(copy.user.name); // changed
  console.log(obj.user.name); // changed

   const obj3=Object.assign({d:6},obj);
   console.log(obj3)

})();

(function optionalChainingExample() {
  const obj = {
    user: {
      name: "demo"
    }
  };

  console.log("\nOptional Chaining");

  console.log(obj.user.address?.city); // undefined // Cannot read properties of undefined
})();