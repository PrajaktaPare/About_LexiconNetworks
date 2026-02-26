const obj = {
  name: "prajakta",

  // Regular method 
  regularMethod() {
    console.log("regularMethod:", this.name); //prajakta
  },

  // Arrow as method 
  arrowMethod: () => {
    let namee="pp"
    console.log("arrowMethod:", this.namee); //undefined
  },

  // arrow inside regular method
  methodWithArrow() {
    const arrow = () => {
      console.log("methodWithArrow:", this.name); //prajakta
    };
    arrow();
  }
};



obj.regularMethod();     // prajakta
obj.arrowMethod();       // undefined
obj.methodWithArrow();   // prajakta