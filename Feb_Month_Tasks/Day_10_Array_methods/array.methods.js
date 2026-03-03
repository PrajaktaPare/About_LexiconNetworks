// Simple JavaScript array methods including push(), pop(), shift(), unshift(),
// splice(), slice(), concat(), indexOf(), lastIndexOf(), includes(), sort(), reverse(), join(), toString(), copyWithin(), and flat()

"use strict"
const languages=["js","py","c","cpp","java"]
languages.push("ror")
languages.push("")

console.log(languages);

languages.pop()
console.log(languages);

languages.unshift("cSharp")//insert at start
console.log(languages)

languages.shift()//remove from start
console.log(languages)

const a=[]
console.log(a.pop())//undefined 
