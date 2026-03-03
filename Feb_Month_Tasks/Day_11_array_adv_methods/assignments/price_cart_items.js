// Find total price of cart items
const cart = [
  { id: 1, item: "Book", price: 100 },
  { id: 2, item: "Pen", price: 20 },
  { id: 3, item: "Bag", price: 500 }
];

function totalPrice(arr){
    return arr.reduce((acc,i)=>acc+i.price,0)
}

console.log(totalPrice(cart))