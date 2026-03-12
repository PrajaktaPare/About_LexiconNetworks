// Convert the current date into the following formats:
// toDateString()
// toISOString()
// toLocaleDateString()

function formatsDate(d){
    return `toDateString() : ${d.toDateString()}\ntoISOString() : ${d.toISOString()}\ntoLocaleDateString() : ${d.toLocaleDateString()}`
}

const date=new Date()
console.log(formatsDate(date))