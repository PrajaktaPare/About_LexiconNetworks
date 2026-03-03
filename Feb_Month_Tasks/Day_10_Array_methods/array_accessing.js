"use strict"

const subName=["JavaScript","Python","C"]

console.log(subName[1]);//Python
console.log(subName["1"]);//Python
console.log(subName[1][1]);//y
console.log(subName[-2]);//undefined


console.log(subName.at(-2))


console.log("Into for loop : ");
for(let i=0;i<subName.length;i++)
{
    console.log(subName[i])
}


console.log("Into for..of loop : ")
for(let i of subName){
    console.log(i)
}


console.log("Into forEach loop : ")
subName.forEach((value,key)=>{
    console.log(key,value)
})

const arr = [100, 200, 300];

console.log("Destructuring");

const [first, second,...rest] = arr;

console.log(first);  // 100
console.log(second); // 200
console.log(rest)