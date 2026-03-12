//Add 5 days to the current date using setDate().

const date= new Date()
console.log(date)

// date.setDate(17)
date.setDate(date.getDate()+5)
console.log(date)
