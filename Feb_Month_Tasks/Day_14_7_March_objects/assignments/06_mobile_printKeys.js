//Create an object mobile with properties brand, ram, price. Print all keys using Object.keys().

const mobile={
    brand:"brandName",
    ram:"8.00 GB",
    price:20000

}

function printKeys(obj){
    return Object.keys(obj)

}
console.log(printKeys(mobile))