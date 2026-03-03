// Remove falsy values (false, 0, "", null, undefined, NaN) using filter

function removeFalsy(arr){
    // return arr.filter((i)=>!i===false)
    return arr.filter((Boolean))
}

const arr = [1,2,"pp",false, 0, "", null, undefined, NaN,{},89]
console.log(removeFalsy(arr))