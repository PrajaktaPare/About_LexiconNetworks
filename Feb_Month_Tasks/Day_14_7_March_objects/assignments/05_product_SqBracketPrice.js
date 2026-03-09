//Create an object product with name and price. Access the price using bracket notation.


const product={
    name:"productName",
    price:50
}

function returnPrice(obj){
    return obj["price"]
}
console.log(returnPrice(product))