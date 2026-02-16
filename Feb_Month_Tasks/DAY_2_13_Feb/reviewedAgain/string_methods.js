

let list=`
demo1
demo2
demo3 `;

console.log(`list of demo : ${list}`)


let list2=`\ndemo1\ndemo2\n`;
console.log(`list of demo : ${list2}`)

s="Prajakta"
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.length)
console.log(s[2])
console.log(s.charAt(2))


for (let i of s){
    console.log(i)
}

console.log( "Widget with id".includes("Widget") )

console.log("Widget".includes("id") )//true
console.log( "Widget".includes("id", 3) )//false, from position 3 there is no "id"

console.log("Widget".startsWith("Wid"))
console.log("Widget".endsWith("get"))



//slice

let ss="Internship"
console.log(ss.slice(2,5))//ter
console.log(ss.slice(2))

//substring() This is almost the same as slice, but it allows start to be greater than end

console.log(ss.substring(6,2))
console.log("foo "+ss.slice(6,2))// ""

console.log(ss.substr(2,4))//from 2 to 4 char

//char to decimal
console.log( "Z".codePointAt(0))
//
console.log(String.fromCodePoint(90))

p=" hii "
console.log(p.trim())//trimStart trimEnd
console.log(p.repeat(2))
console.log(p.replace("hii","hello"))
//replaceAll

a="Fergusson "
b="College"
console.log(a.concat(b))

//split
c="Fergusson college"
console.log(c.split(" "))