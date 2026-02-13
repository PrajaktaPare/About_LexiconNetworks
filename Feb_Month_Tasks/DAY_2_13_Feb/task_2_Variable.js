//variables - container to store the data 
//variables can be declare using var let  and const in js 
//Lexical scoping means that the scope of a variable is determined by its position in the source code (where it is written), not where it is called from
//difference between var and let 

// block(let) and global(var) Scoping and redeclaration(let,var) reasssignment(var)

var b = 10;
function f(){
    var b=20; //function scope variable 
    b=20; //reassigning
    // console.log(b);
}
f(); //The function variable is destroyed after execution finishes
console.log(b);


// let a=10;
// function f(){
//     let a=20;
//     console.log(a);
// }
// f();
// console.log(a);

//hoisting where declarations appears to be at the top while executing intializations are not hoisted

