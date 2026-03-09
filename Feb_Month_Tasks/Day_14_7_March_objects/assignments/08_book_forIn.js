//Create an object book with title, author, year. Loop through the object using for...in and print keys and values.

const book={
    title:"The little life",
    author: "Hanya Yanagihara",
    year: 2015
}

function printKeysValues(obj){
    console.log("Keys : ")
    for(const key in obj){
        console.log(key)
    }
    console.log("\nValues : ")
    for(const key in obj){
        console.log(obj[key])
    }
}

printKeysValues(book)