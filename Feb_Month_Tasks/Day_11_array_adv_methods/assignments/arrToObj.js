// Convert array of numbers to object {value: index}

function arrToObj(arr){
    const obj={}
    arr.forEach((element,key)=> {
        obj[key]=element
    });
    return obj
}

const arr=[1,2,3]
console.log(arrToObj(arr))