const cart = [
  { item: "Book", price: 100, qty: 2 },
  { item: "Pen", price: 20, qty: 5 },
  { item: "Bag", price: 500, qty: 1 }
];
// Find average rating of products

function avgRate(arr){
    const totalCost=arr.reduce((acc,product)=>{
        return acc+product.price*product.qty
    },0)
    const avg=totalCost/arr.length
    return avg
}
console.log(avgRate(cart))
