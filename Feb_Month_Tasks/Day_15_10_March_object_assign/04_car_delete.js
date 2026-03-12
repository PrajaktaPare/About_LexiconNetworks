// Q4. Create an object car with properties: brand, model, and year. Delete the year property and print the updated object.

const car={
    brand: "Tata Motors",
    model:"Tata Harrier",
    Year: 2015
}

function deleteProp(obj){
    delete obj.Year
    return obj
}

console.log(car)
console.log(deleteProp(car))
console.log(car.Year)



