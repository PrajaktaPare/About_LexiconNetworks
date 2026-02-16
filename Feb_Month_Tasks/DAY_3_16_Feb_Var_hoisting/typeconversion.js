let a = "10";

Number(a);   // 10
String(10);  // "10"
Boolean(1);  // true


//implicit hidden bugs 

console.log("10" + 1)   // "101"
console.log("10" - 1  ) // 9
console.log(true + 1   )// 2
 console.log(10 + "5");
console.log("10" - 5); 


let count = "1";
count++;
// count becomes 2 (string → number)
 

0 == false   // true  (coercion)
0 === false  // false (safe)

// Use === in production to avoid hidden type coercion bugs


