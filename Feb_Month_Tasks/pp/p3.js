function reverseWord(s){
    return s.split(" ").map((i)=>i.split("").reverse().join("")).join(" ")
}
console.log(reverseWord("pvkf nufvbd"))

function cntvowelsCons(str){
    const vowels="aeiouAEIOU"
    let vcnt=0,ccnt=0
    for(const i of str){
        if(vowels.includes(i)){
            vcnt=vcnt+1
        }
        else if(i>='a' && i<='z' || i>='A' && i<='Z' ){
            ccnt=ccnt+1
        }
    }
    return [vcnt,ccnt]
}
console.log(cntvowelsCons("praja4k ta"))
function maxMinNum(arr){
    return [Math.max(...arr), Math.min(...arr)]
}
console.log(maxMinNum([3,4,2,6,8,9,1,23,45,67,88,21]))

function titleCase(s){
    const arr= s.split(" ").map((i)=>i[0].toUpperCase()+i.slice(1))
    return arr.join(" ")

}

console.log(titleCase("vfid vfdi ouie fnvhf sauqwi eiw"))


function sumOfDigits(num){
    return String(num).split("").reduce((sum,i)=>sum+Number(i),0)
}

console.log(sumOfDigits(12345))


function palindrome(str){
    return str===str.split("").reverse().join("")
}
console.log(palindrome("madam"))
console.log(palindrome("madamd"))


function cntChar(s){
    return s.split("").reduce((obj,i)=>{
        obj[i]=(obj[i]||0)+1,{}
        return obj
    },{})
}
console.log(cntChar("vbf vebi biwburi vfibberu"))