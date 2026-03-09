// Basics include string creation, accessing characters, and the length property. Practice commonly used methods such as slice(), substring(), replace(), replaceAll(), split(), toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd(), includes(), indexOf(), lastIndexOf(), and charAt().

//search match endwith startwith padding
//searching default para return diff in methods charcodeat charpointat
//concat substr padstart padend repeat 
//w3 string methods  

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hi`;
//${}
let word = "JavaScript";

console.log("word[0] : ",word[0]);  // J
console.log("word[100] : ",word[100]); // undefined 
console.log("word[-1] : ",word[-1]); // undefined 

console.log("word.charAt(0) : ",word.charAt(0));  // J
console.log("word.charAt(100) : ",word.charAt(100)); // ""
console.log("word.charAt(-1) : ",word.charAt(-1)); // ""

console.log("word.at(0) : ",word.at(0));   // J
console.log("word.at(-1) : ",word.at(-1));  // t 

//length property
let text = "Hello";
console.log("text.length : ",text.length); // 5

let empty = "";
console.log("empty.length : ",empty.length); // 0

let space = " ";
console.log("space.length : ",space.length); // 1
