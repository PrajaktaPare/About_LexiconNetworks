// Create an object car with properties brand, model, and price. Update the price by increasing it by 50000.

const car={
    brand :"Tata Motors",
    model :"Tata Harrier",
    price: "26 Lakh"
}
//update in price
// console.log(parseInt(car.price)*100000+50000)
function updatePrice(obj){
    obj.price=parseInt(car.price)*100000+50000
    return obj
}
// console.log(car.price)//before calling
console.log("Price increased by 50k: ",updatePrice(car))
console.log(car.price)
