// // //slice

// let str = "JavaScript";

// // console.log("Original String:", str);
// // console.log("slice(0,4):", str.slice()); //
// console.log("slice(0,4):", str.slice(0,4)); // Java
// console.log("slice(0,4):", str.slice(0,-4)); // JavaSc
// // console.log("slice(4):", str.slice(4)); // Script
// // console.log("slice(-6):", str.slice(-6)); // Script
// // console.log("slice(-4,-1):", str.slice(-4,-1)); // rip
// // console.log("slice(-1,-4):", str.slice(-1,-4)); // ""
// // console.log("slice(5,2):", str.slice(5,2)); // ""
// // console.log("slice(100):", str.slice(100)); // ""
// console.log("slice(-100):", str.slice(-100)); // JavaScript starts from 0
// // console.log("slice():", str.slice()); // JavaScript

// let text = "Hello";
// text.slice(1,3);
// console.log("Original after slice:", text); // Hello

// let modified = text.slice(0,1).toLowerCase() + text.slice(1);
// console.log("Modified string:", modified);// hello

// substring

let str = "JavaScript";
// console.log("Original String:", str);
// console.log("substring(0,4):", str.substring(0,4)); // Java
// console.log("substring(4):", str.substring(4)); // Script
console.log("substring(-2):", str.substring(-2)); // JavaScript negative treated as 0
// console.log("substring(-2,4):", str.substring(-2,true)); // J
// console.log("substring(5,2):", str.substring(5,2)); // vaS values are swapped internally
// console.log("substring(100):", str.substring(100)); // ""
console.log("substring(100):", str.substring(-100)); // 0
// console.log("substring(0,100):", str.substring(0,100)); // JavaScript
// console.log("substring():", str.substring()); // JavaScript

// let text = "Hello";
// text.substring(1,3);
// console.log("Original after substring:", text); // Hello unchanged

// //replace

// let text = "Hello World world";
// console.log("Original String:", text);
// console.log("replace('World','JS'):", text.replace("World", "JS"));// Hello JS World
// console.log("replace('world','JS'):", text.replaceAll("world", "JS"));// No change
// //replace regular expression usage
// let str = "banana";
// console.log("replace('a','X'):", str.replace("a", "X"));// bXnana 
// console.log("Original after replace:", text);// Hello World World

//replaceAll

// let text = "Hello World World";

// console.log("Original String:", text);

// console.log("replaceAll('World','JS'):", text.replaceAll("World","JS"));// Hello JS JS
// console.log("replaceAll('world','JS'):", text.replaceAll("world", "JS"));// No change

// let str = "banana";
// console.log("replaceAll('a','X'):", str.replaceAll("a", "X"));// bXnXnX

// console.log("Original after replaceAll:", text);// Hello World World

//split
//limit 
//separator → where to split
//limit → maximum number of elements in result array

let text = "Hello World JS";
// console.log("Original String:", text);
// console.log("split(' '):", text.split(" "));// ["Hello", "World", "JS"]
console.log("split('o'):", text.split("o",2));// ["Hell", " W"]
console.log("split('o'):", text.split("o",-2));// -2 => 0 []

// console.log("split(''):", text.split(""));// ["H","e","l","l","o"," ","W","o","r","l","d"," ","J","S"]
//console.log("hello".split("x"))//["hello"] because no separator found


// let str = "banana";
// console.log("split('a'):", str.split("a"));// ["b","n","n",""]
// console.log("Original after split:", text);// Hello World JS


// toUpperCase and toLowerCase

// let text = "Hello World";

// console.log("Origi nal String:", text);
// console.log("toUpperCase():", text.toUpperCase());// HELLO WORLD
// console.log("toLowerCase():", text.toLowerCase());// hello world

// let str = "JaVaScRiPt";
// console.log("toUpperCase():", str.toUpperCase());// JAVASCRIPT
// console.log("toLowerCase():", str.toLowerCase());// javascript

// console.log("Original after methods:", text);// Hello World

//trim

//trim methods

// let text = "   Hello World   ";
// console.log("Original String:", `"${text}"`);
// console.log("trim():", `"${text.trim()}"`);// "Hello World" 
// console.log("trimStart():", `"${text.trimStart()}"`);// "Hello World   " 
// console.log("trimEnd():", `"${text.trimEnd()}"`);// "   Hello World" 

// let str = "  Hello  JS  ";
// console.log("trim():", `"${str.trim()}"`);// "Hello   JS"
// console.log("Original after trim:", `"${text}"`);// "   Hello World   "

// function removeSpace(str){
//     let s=""
//     const strTrim=str.trim()
//     for(const i of strTrim.split(" ")){
//         s+=i.trim()
//     }
//     console.log(s.length)
//     return s
// }

// function removeSpace(str){
//     sArr=str.split(" ")
//     // console.log(s)//[ '', '', 'Hello', '', 'JS', '', '' ]
//     const strFilter=sArr.filter((i)=>i).join(" ")
//     // console.log(strFilter)
//     return strFilter
// }
// console.log("Str After filtering : ",removeSpace(str))


// //includes
// let text = "Hello World";
// console.log("Original String:", text);
// console.log("includes('World'):", text.includes("World"));// true
// console.log("includes('world'):", text.includes("world"));// false
// console.log("includes('Hello'):", text.includes("Hello"));// true
// console.log("includes(''):", text.includes(""));//true

// console.log("includes('Hello', 1):", text.includes("Hello", 1));// false start from index 1
// console.log("includes('Hello', 1):", text.includes("Hello", -4));//true start = max(position, 0)
// //negetive index ==0 && regular exp = error
// console.log("includes('JS'):", text.includes("JS"));// false
// console.log("Original after includes:", text);// Hello World

//indexOf

// let text = "Hello World";
// console.log("Original String:", text);
// console.log("indexOf('o'):", text.indexOf("o"));// 4 
// console.log("indexOf('World'):", text.indexOf("World"));// 6
// console.log("indexOf('world'):", text.indexOf("world"));// -1
// console.log("indexOf(''):", text.indexOf(""));// 0

// console.log("indexOf('o', 5):", text.indexOf("o", 5));// 7 start searching from index 5

// console.log("indexOf('JS'):", text.indexOf("JS"));// -1
// console.log("Original after indexOf:", text);// Hello World

//lastIndexOf

// let text = "Hello World";
// console.log("Original String:", text);
// console.log("lastIndexOf('o'):", text.lastIndexOf("o"));// 7 
// console.log("lastIndexOf(''):", text.lastIndexOf(""));//11 text.lastIndexOf("") = text.length 
// console.log("lastIndexOf('World'):", text.lastIndexOf("World"));// 6
// console.log("lastIndexOf('world'):", text.lastIndexOf("world"));// -1 (case sensitive)

// console.log("lastIndexOf('o', 6):", text.lastIndexOf("o", 6));// 4 starting from 6 index
//negative index
// console.log("lastIndexOf('JS'):", text.lastIndexOf("JS"));// -1
// console.log("Original after lastIndexOf:", text);// Hello World

//charAt

// let text = "Hello World";
// console.log("Original String:", text);
// console.log("charAt(0):", text.charAt(0));// H
// console.log("charAt(4):", text.charAt(4));// o
// console.log("charAt(5):", text.charAt(5));//"" 
// console.log("at(-4):", text.at(true));//e
// console.log("at(-4):", text.at());//H
// console.log("charAt(-4):", text.charAt());//H
// console.log("charAt(100):", text.charAt(100));// "" (empty string)

// console.log("text[0]:", text[0]);// H
// console.log("text[100]:", text[100]);// undefined
// console.log("Original after charAt:", text);// Hello World