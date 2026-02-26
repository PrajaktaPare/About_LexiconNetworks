const arr=[1,2,3,4,5,6,7]
const [first,second,...rest]=arr

console.log(rest)

let s="demo"
let [f,...r]=s
console.log(f,r)

const o={
    id:1,
    name:"pp"
}
const {id,...rentries}=o
console.log(id,rentries)

// let num=1234
// let [ff,...restt]=num
// console.log(ff,restt)