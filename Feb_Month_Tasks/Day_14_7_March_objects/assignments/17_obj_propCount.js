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



// const user = {
//     name: "Prajakta",
//     age: 21,
//     address: {
//         city: "Nagpur",
//         state: "Maharashtra",
//         demo:null
//     }
// };
// console.log(user)
// function countAllProperties(obj) {
//     let count = 0;

//     for (let key in obj) {
//         count++;

//         if (typeof obj[key] === "object") {
//             count += countAllProperties(obj[key]);
//         }
//     }

//     return count;
// }

// console.log(countAllProperties(user));