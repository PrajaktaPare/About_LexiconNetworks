//Create an object laptop with properties brand, price, processor. Print all values using Object.values().


const laptop={
    brand:"HP",
    price:70000,
    processor:"Intel i5"
}

function printValues(obj){
    return Object.values(obj)
}
console.log(printValues(laptop))