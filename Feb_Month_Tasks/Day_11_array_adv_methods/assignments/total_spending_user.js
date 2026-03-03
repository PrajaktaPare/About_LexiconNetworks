const data = [
  { email: "a@gmail.com", purchases: [100, 200] },
  { email: "b@gmail.com", purchases: [300] },
  { email: "c@gmail.com", purchases: [] }
];
// calculate total spending per user

function totalSpending(arr){
    return data.map((user)=>
    {
        return user.purchases.reduce((acc,p)=>acc+p,0)
    })

}

console.log(totalSpending(data))