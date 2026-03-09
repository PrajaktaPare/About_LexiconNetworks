// //replace

// // replaceStr="Replace jS with JavaScript (JS)"
// // console.log("Replace : ",replaceStr.replace(/JS/,"js"))
// // console.log("Replace case insensitive : ",replaceStr.replace(/JS/i,"js"))
// // console.log("Replace global : ",replaceStr.replace(/JS/g,"js"))
// // console.log("Replace global insensitive : ",replaceStr.replace(/JS/gi,"js"))

// // const nums="123"
// // console.log("Replace func : ",nums.replace("2",(match)=>match*2))

// //substr()

// str="Playful Mind"
// console.log("substr() : ",str.substr())
// console.log("substr(1,3) : ",str.substr(1,3))
// console.log("substr(1) : ",str.substr(1))
// console.log("substr(-4) : ",str.substr(-4))
// console.log("substr(-1,1) : ",str.substr(-2,))
// console.log("substr(-1,-4) : ",str.substr(-1,-4))

// //concat
// let str1 = "good"
// let str2 = "morning"

// console.log(str1.concat(str2))
// console.log(str1.concat(" ", str2))

// let str3 = "everyone"
// console.log(str1.concat(" ", str2, " ", str3))

// let text = "Number : "
// console.log(text.concat(100))
// console.log(text.concat(true))
// console.log(text.concat(null))
// console.log(text.concat(undefined))

// let arr = [1,2,3]
// console.log(text.concat(arr))

// let obj = {}
// console.log(text.concat(obj))

// let a = "Hello"
// let b = "World"
// a.concat(" ", b)
// console.log(a)
// console.log(`"${a.concat(" ")}"`)
// console.log(a.concat(" ", b, " ", 2026, " ", true))

// //padstart
// function padStrings(){

// let exString = "Hello123"
// let exString2 = "Geeks"

// console.log("1:", exString.padStart(10,"$")) // $$Hello123
// console.log("2:", exString2.padStart(10,"XX")) // XXXXXGeeks
// console.log("3:", "abc".padStart(6,"*")) // ***abc
// console.log("4:", "abc".padStart(10,"ab")) // ababababc
// console.log("5:", "abc".padStart(3,"*")) // abc
// console.log("6:", "abc".padStart(2,"*")) // abc
// console.log("7:", "abc".padStart(10)) // "       abc" (7 spaces + abc)
// console.log("8:", "abc".padStart(10,"")) // abc
// console.log("9:", "abc".padStart(10,"123456")) // 1234561abc
// console.log("10:", "abc".padStart(10,null)) // nullnulabc
// console.log("11:", "abc".padStart(10,undefined)) // "       abc" udefined=>" "
// console.log("12:", "abc".padStart(10,true)) // truetruabc
// console.log("13:", "abc".padStart(10,123)) // 1231231abc
// console.log("14:", "".padStart(5,"*")) // *****
// console.log("16:", "abc".padStart(10,{})) // [objectabc
// console.log("17:", "abc".padStart(10,["x","y"])) // x,yx,yxabc
// }

// padStrings()

// //padEnd

// function padEndStrings(){

// let exString = "Hello123"
// let exString2 = "Geeks"

// console.log("1:", exString.padEnd(10,"$")) // Hello123$$
// console.log("2:", exString2.padEnd(10,"XX")) // GeeksXXXXX
// console.log("3:", "abc".padEnd(6,"*")) // abc***
// console.log("4:", "abc".padEnd(10,"ab")) // abcabababa
// console.log("5:", "abc".padEnd(3,"*")) // abc
// console.log("6:", "abc".padEnd(4,"*")) // abc
// console.log("7:", "abc".padEnd(10)) // abc       
// console.log("8:", "abc".padEnd(10,"")) // abc
// console.log("9:", "abc".padEnd(10,"123456")) // abc1234561
// console.log("10:", "abc".padEnd(10,null)) // abcnullnul
// console.log("11:", "abc".padEnd(10,undefined)) // abc       
// console.log("12:", "abc".padEnd(10,true)) // abctruetru
// console.log("13:", "abc".padEnd(10,123)) // abc1231231
// console.log("14:", "".padEnd(5,"*")) // *****
// console.log("16:", "abc".padEnd(10,{})) // abc[object
// console.log("17:", "abc".padEnd(10,["x","y"])) // abcx,yx,yx,
// }
// padEndStrings()

// //endswith()
// // searchString: The searchString is a string of characters that is to be searched at the end of the given string. 
// // length: The length determines the length of the given string from the beginning to be searched for the search string
function endWithExamples(){

let str="Hello World JS"
console.log("1:",str.endsWith("JS",-1)) // true
// console.log("2:",str.endsWith("World")) // false
// console.log("3:",str.endsWith("ld JS")) // true
// console.log("4:",str.endsWith("JS",14)) // true
// console.log("5:",str.endsWith("World",11)) // true
// console.log("6:",str.endsWith("Hello")) // false
// console.log("7:",str.endsWith("")) // true
// console.log("8:",str.endsWith("JS",2)) // false
 console.log("9:",str.endsWith("o",-10)) // false
// console.log("10:","abc".endsWith("c")) // true
// console.log("11:","abc".endsWith("bc")) // true
// console.log("12:","abc".endsWith("abc")) // true
// console.log("13:","abc".endsWith("abcd")) // false
// console.log("14:","abc".endsWith(null)) // false
// console.log("15:","abc".endsWith(undefined)) // false
// console.log("16:","abc".endsWith(3)) // false
// console.log("17:","abc".endsWith(true)) // false
}
endWithExamples()

// //match
// function matchExamples(){

// let text = "Hello JavaScript JS 123 JS 456 JS";

// console.log("1:", text.match("Java")); // ["Java"]
// console.log("2:", text.match(/JS/)); // ["JS"]
// console.log("3:", text.match(/JS/g)); // ["JS","JS","JS","JS"]
// console.log("4:", text.match(/\d+/g)); // ["123","456"]
// console.log("5:", text.match(/Python/)); // null
// console.log("6:", text.match(/\bJS\b/g)); // ["JS","JS","JS","JS"]
// console.log("7:", text.match(/js/gi)); // ["JS","JS","JS","JS"]
// console.log("8:", text.match(/\b\w/g)); // ["H","J","S","J","S","J","S"]
// console.log("9:", text.match(/[a-zA-Z]+/g)); // ["Hello","JavaScript","JS","JS","JS","JS"]
// console.log("10:", text.match(/./g)); // array of every character
// console.log("11:", text.match(/\s/g)); // array of spaces

// console.log("12:", text.match(/JS?/g)); // ["J","JS","J","JS","J","JS","J","JS"]

// console.log("13:", text.match(/^Hello/)); // ["Hello"]
// console.log("14:", text.match(/456$/)); // null because string ends with "JS"

// let special = "Price: $100, $200, $300";
// console.log("15:", special.match(/\$\d+/g)); // ["$100","$200","$300"]

// }

// matchExamples();

//vs matchAll
let text = "JS1 JS2 JS3";

// match() with global
console.log(text.match(/JS\d/g));// Output: ["JS1","JS2","JS3"]

// matchAll() with global
for (const m of text.matchAll(/JS\d/g)) {
    console.log(m[0], "at index", m.index);
}

//matchAll
//   let strWords = "apple banana apple mango";
//     let regexWords = /apple/g;
//     let matchesWords = strWords.matchAll(regexWords);

//     for (const m of matchesWords) {
//         console.log("Found:", m[0], "at index:", m.index);
//     }

//   let text = "John:25, Jane:30, Mike:40";
//     let regex1 = /(\w+):(\d+)/g; // (\w+) = name, (\d+) = age
//     let matches1 = text.matchAll(regex1);

//     for (const m of matches1) {
//         console.log("Full match:", m[0]);   // entire match like "John:25"
//         console.log("Name (group 1):", m[1]); // first group
//         console.log("Age (group 2):", m[2]);  // second group
//         console.log("Index:", m.index);       // position in string
//         console.log("Original string:", m.input);
//         console.log("---");
//     }

// //repeat
// function repeatExamples() {
//     let str = "abc";

//     console.log("1:", str.repeat(3));        // "abcabcabc"
//     console.log("2:", str.repeat(1));        // "abc"
//     console.log("3:", str.repeat(0));        // ""
//     console.log("4:", str.repeat(2.5));      // "abcabc"
//     console.log("5:", str.repeat("3"));      // "abcabcabc"
//     console.log("6:", str.repeat(true));     // "abc"
//     console.log("7:", str.repeat(null));     // ""null and undeifned =>0
//     console.log("8:", str.repeat(undefined)); // ""
    
//     console.log("9:", str.repeat(1)); 
//     console.log("9:", str.repeat(-1));//rangeerror invalid count
    
// }

// repeatExamples();

// let str = "gfg";
// // Repeating the string 2.9 times i.e, 2 times
// // because 2.9 converted into 2
// let repeatCount = str.repeat(2.9);
// console.log(repeatCount);

// //search
// // Taking input a string.
let string = "GeeksforGeeks";

// Taking a regular expression.
let re1 = /G/g;
let re2 = /e/g;
let re3 = /s/g;

// Printing the index of matching alphabets
console.log("226 :",string.search(re1));
console.log(string.search(re2));
console.log(string.search(re3));

let str = "GeeksforGeeks";
let searchString = "for";
let Result = str.search(searchString);
console.log(Result);

//valueof
// Taking a string as input and printing it
// with the help of string.valueOf() method
// let a = new String("GeeksforGeeks");

// console.log(a.valueOf());