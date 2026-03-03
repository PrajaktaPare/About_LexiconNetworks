
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 5 }
];
// Find average rating of products

function avgRate(arr){
    const total = arr.reduce((acc, product) => acc + product.stock, 0);
    return total / arr.length;
}
console.log(avgRate(products))