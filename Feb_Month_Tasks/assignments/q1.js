// Create a system to manage customer orders.// Each order has:
// {
//   id,
//   customerName,
//   items: [{ name, price, quantity }],
//   orderDate
// }
// Tasks:
// // Flatten all items into single array (flat)

const orders = [
  {
    id: 1,
    customerName: "demo1",
    items: [
      { name: "i1", price: 100 },
      { name: "i2", price: 200 },
      { name: "i3", price: 300 },
    ],
    orderDate: "2026-03-19",
  },
  {
    id: 2,
    customerName: "demo2",
    items: [
      { name: "ii1", price: 150 },
      { name: "ii2", price: 250 },
      { name: "ii3", price: 350 },
    ],
    orderDate: "2026-03-23",
  },
];

// Add a new order (use push)
function addOrder(arr,order){
    arr.push(order)
    return arr
}
console.log(addOrder(orders,{
    id: 3,
    customerName: "demo3",
    items: [
      { name: "iii1", price: 650 },
      { name: "iii2", price: 450 },
      { name: "iii3", price: 300 },
    ],
    orderDate: "2026-03-22",
  }))


// Remove an order by ID (splice + findIndex)

function removeOrder(arr,id){
    const index=arr.findIndex(order=>order.id===id)
    if(id!==-1){
        arr.splice(index,1)
    }
    return arr
}

// Calculate total price per order (reduce)

function totalPrice(arr,id){
    return arr.reduce((acc,i)=>{
      
        i.items.forEach(element => {
            // console.log(element.price)
            acc=acc+element.price
        });
        return acc
    },0)
}

console.log("Total price : ",totalPrice(orders,2))

// Get all orders placed in last 7 days (Date + filter)


function filterByLastXDays(arr,days){
    const x=new Date("2026-03-23")
    // console.log(new Date().getDate()
    // console.log(new Date(date).getDate())
    console.log(x)

    return arr.filter((i)=>{
        const date=new Date(i.orderDate)

        const diff=(x-date)/(1000*60*60*24)
        console.log(diff)
        return diff>=0 && diff<=days
    })
}

console.log(filterByLastXDays(orders,3))

// Convert customer names to uppercase (map + toUpperCase)


function customerNameToUppercase(arr,id){
  return arr.map((i)=>{
    if(i.id===id){
      i.customerName=i.customerName.toUpperCase()
    }
    return i
  })
}

console.log(customerNameToUppercase(orders,2))


// Sort orders by total price (sort + comparator)

function sortByTotalPrice(arr){
    return arr.sort((i,j)=>{
      let t1=i.items.reduce((acc,item)=>acc+item.price,0)
      let t2=j.items.reduce((acc,item)=>acc+item.price,0)

      return t2-t1
      
    })
    return arr
}


console.log("126 : ",sortByTotalPrice(orders))

// Generate order summary string (join + template literals)

// {
//     id: 1,
//     customerName: "demo1",
//     items: [
//       { name: "i1", price: 100 },
//       { name: "i2", price: 200 },
//       { name: "i3", price: 300 },
//     ],
//     orderDate: "2026-03-19",
//   }

function orderSummaryString(arr,id){
      return arr.map((i)=>{
        if(i.id===id){
          const str=i.items.reduce((acc,i)=>acc+i+" \n","")
          return `id: ${i.id}\n
          Customer Name : ${i.customerName}\nItems :${str}\nOrder Date : ${i.orderDate}`
        }
      
      })
}

console.log("149 : ",orderSummaryString(orders,2))