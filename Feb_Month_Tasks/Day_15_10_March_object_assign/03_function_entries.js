
//Q3. Write a function that takes an object as an argument and prints all its keys and values.

const obj={
    key1:"val1",
    key2:"val2"
}


function printKeysValues(obj){

    const keys = []
    const values = []

    for(const [key,value] of Object.entries(obj)){
        keys.push(key)
        values.push(value)
    }

    return {keys, values}
}

console.log(printKeysValues(obj))