// Create an object person with properties name, age, and city. Print all values.

const person={
    name:"DemoName",
    age:21,
    city:"Pune"
 }


function printObj(obj){
    let result =""
    for(const [key,value] of Object.entries(obj)){
        result+=`${key} : ${value}\n`
    }
    return result
    // return Object.entries(obj)
}

console.log(printObj(person))


























// const p2={
//      name:"DemoName",
//     age:21,
//     city:"Pune"
// }

// console.log(JSON.stringify(person))
// // const p=JSON.stringify(person)
// // console.log(JSON.parse(p))
// console.log(JSON.stringify(p2))

// console.log(JSON.stringify(person)===JSON.stringify(p2))