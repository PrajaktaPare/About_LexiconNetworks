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