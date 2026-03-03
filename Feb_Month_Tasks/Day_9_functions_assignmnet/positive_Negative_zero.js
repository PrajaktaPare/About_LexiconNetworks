"use strict"

function numCheck(num){
    num=parseInt(num)
    // console.log(num)
    if(isNaN(num)){
        console.log(num)

        return "NAN"
    }
    if(num>0){
        console.log(num)
        return "Positive"
    }
    else if(num<0){
        console.log(num)

        return "Negtaive"
        
    }
    else{
        console.log(num)

        return "Zero"
    }
}

// console.log(numCheck(4))
// console.log(numCheck(-8))
// console.log(numCheck(0))
// console.log(numCheck("HI"))
console.log(numCheck("500d100"))//500
console.log(parseInt("d500"))//NAN // if str is starts with alphaand symbols then it will return NAN