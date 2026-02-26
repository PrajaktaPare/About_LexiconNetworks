function numCheck(num){
    
    if(isNaN(num)){
        return "NAN"
    }
    if(num>0){
        return "Positive"
    }
    else if(num<0){
        return "Negtaive"
    }
    else{
        return "Zero"
    }
}

console.log(numCheck(4))
console.log(numCheck(-8))
console.log(numCheck(0))
console.log(numCheck("HI"))