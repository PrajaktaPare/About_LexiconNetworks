// 4. Product Inventory System

// Manage products in a store.

// Product:
// {
//   id,
//   name,
//   price,
//   category,
//   stock
// }
// Tasks:

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 80000,
    category: "Electronics",
    stock: 10
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    category: "Electronics",
    stock: 3
  },
  {
    id: 3,
    name: "Shirt",
    price: 1500,
    category: "Clothing",
    stock: 20
  },
  {
    id: 4,
    name: "Shoes",
    price: 4000,
    category: "Footwear",
    stock: 2
  },
  {
    id: 5,
    name: "Watch",
    price: 7000,
    category: "Accessories",
    stock: 5
  },
  {
    id: 6,
    name: "Laptop", // duplicate name
    price: 75000,
    category: "Electronics",
    stock: 8
  }
];


// Increase/decrease stock (update object)

// function increaseStock(arr,id,incNum){
//     return arr.map((i)=>{
//         if(i.id===id)
//         i.stock=i.stock+incNum
//     return i
//     }
// )
// }

// console.log("72: ",increaseStock(products,2,3))

// Filter low stock products (< 5)

// function filterLowStockProduct(arr){
//     return arr.filter((i)=>i.stock<5)
// }

// console.log("84 : ",filterLowStockProduct(products))

// // Apply discount to all products (map + Math)

// function applyDiscount(arr,discount){
//     return arr.map((i)=>i.price=i.price-(i.price*discount/100))
// }

// console.log("91 : ",applyDiscount(products,10))

// Find most expensive product (Math.max)

// function mostExpensiveProduct(arr){
//     const ar=Math.max(...arr.map((i)=>i.price))
//     return arr.find((i)=>i.price===ar)
// }

// console.log("99 : ",mostExpensiveProduct(products))

// Group products by category (reduce)

// function groupProductByCategory(arr){
//     return arr.reduce((acc,i)=>{
//         const c=i.category
//         if(!acc[c]){
//             acc[c]=[]
//         }
//         acc[c].push(i)
//         return acc
//     },[])
// }

// console.log("113 : ",groupProductByCategory(products))

// Check if product exists (includes / findIndex)

// function ifProductExist(arr,id){
    
//         const index=arr.findIndex((i)=>i.id===id)
//         if(index!=-1){
//             return "Id Exist"
//         }
    
// }

// console.log("125 : ",ifProductExist(products,3))