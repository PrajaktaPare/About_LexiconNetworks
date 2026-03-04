// Remove falsy values (false, 0, "", null, undefined, NaN) using filter

function removeFalsy(arr){
    // return arr.filter((i)=>i)//if condition true then return i, condition always going to convert boolean
    const a=[]
    for(const i of arr){
        console.log(i,":",Boolean(i))
        if(i){
            a.push(i)
        }
    }
    return a
    // return arr.filter((Boolean))
}

const arr = [1,2,"pp",false, 0, "", null, undefined, NaN,"false",{},89]
console.log(removeFalsy(arr))
//!1 ===false 