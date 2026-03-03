"use strict"

const obj = {
  name: "Jyoti",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet()//Jyoti