//Create an object user with properties. Count the number of properties in the object.


const user = {
    name: "Prajakta",
    age: 21,
    city: "Pune"
};

function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties(user)); 



