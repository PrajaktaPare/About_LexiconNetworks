let length=0.5;
let width=0.5;
// let area=length*width
// console.log("Area of rectangle : "+area)

// //hoisting arrow functions and funstions calling  



let area=(l,b)=>{
    return l*b
}
console.log(`Area of rectangle ${area(length,width)}`)