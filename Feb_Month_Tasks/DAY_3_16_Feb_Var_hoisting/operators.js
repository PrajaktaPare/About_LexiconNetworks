// Arithmetic Operators
let a = 10;
let b = 3;
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);
console.log("Power:", a ** b);

// Assignment Operators
let x = 5;
x += 2;
console.log("x += 2:", x);//7
x -= 1;
console.log("x -= 1:", x);//6
x *= 3;
console.log("x *= 3:", x);//18
x /= 2;
console.log("x /= 2:", x);//9

// Comparison Operators
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 == '10':", 10 == "10");//true
console.log("10 === '10':", 10 === "10");//false

// 1+2=3
// 3+"3"="33"

// Logical Operators
let isLoggedIn = true;
let isAdmin = false;
console.log("Logged in and admin:", isLoggedIn && isAdmin);
console.log("Logged in or admin:", isLoggedIn || isAdmin);
console.log("Not admin:", !isAdmin);

// Ternary Operator
let marks = 35;
let result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);

// Increment & Decrement
let i = 5;
console.log("Post-increment:", i++);
console.log("After post-increment:", i);
console.log("Pre-increment:", ++i);

// Operator Precedence (BODMAS)
console.log("10 + 2 * 3:", 10 + 2 * 3);
console.log("(10 + 2) * 3:", (10 + 2) * 3);

// Type Coercion with Operators
console.log("10 + '5':", 10 + "5"); // string concat
console.log("10 - '5':", 10 - "5"); // number
