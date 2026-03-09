// Create an object car with properties brand, model, and price. Update the price by increasing it by 50000.

const car={
    brand :"Tata Motors",
    model :"Tata Harrier",
    price: "15 Lakh"
}

console.log(parseInt(car.price)*100000+50000)
function updatePrice(obj){
    let priceNum=parseInt(car.price)*100000
    return priceNum+50000
}
console.log("Price increased by 50k: ",updatePrice(car))