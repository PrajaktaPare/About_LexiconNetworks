//variables - container to store the data 
//variables can be declare using var let  and const in js 
//Lexical scoping means that the scope of a variable is determined by its position in the source code (where it is written), not where it is called from
//difference between var and let 

// block(let) and global(var) Scoping and redeclaration(let,var) reasssignment(var)

// var b = 10;
// b=30; //reassigning

// function f(){
//     var b=20; //function scope variable 
    
//     console.log(b);
// }
// f(); //The function variable is destroyed after execution finishes
// console.log(b);




// if (true) {
//     var x = 10;
//     let y = 20;
//     const z=30;
// }

// console.log(x); 
// console.log(y); 




let a=10;

function f(){
    var a=20;//shadowing
    console.log(a);
}
f();
console.log(a);

//hoisting where declarations appears to be at the top while executing.. intializations are not hoisted
// var is hoisted and initialized with undefined
// let and const are hoisted but not initialized. This is called the Temporal Dead Zone.

// console.log(aa)
// var aa;
// aa=10;
// console.log(aa)



//  console.log(a);
//   let a;


//Scope Chain current scope ->outer scope ->outer scope until global->not found then reference error