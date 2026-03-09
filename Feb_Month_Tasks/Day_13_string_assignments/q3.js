
// Q3 Capitalize First Letter of Every Word
// Input: let str = "hello user welcome to javascript";
// Expected Output: "Hello User Welcome To Javascript"
//make code dynamic 

function captilizeFirstLetter(str,word){

    const arrStr=str.split(" ")
    //assign
    const indexOfWord=arrStr.indexOf(word)
    // console.log(indexOfWord)
    if(indexOfWord!=-1){
    arrStr.splice(indexOfWord,1)
    }//removing word 
    // console.log(arrStr)
    // console.log(arrStr)
    const capitalStr= arrStr.map((i)=> i.slice(0,1).toUpperCase()+i.slice(1)
    )
    
    return capitalStr.join(" ")
}

let str = "hello user welcome to javascript" ;
console.log("22 :",str.slice(str.lastIndexOf(" ")).trimStart().split(""))
console.log(captilizeFirstLetter(str,"prajakta"))
//trim split
