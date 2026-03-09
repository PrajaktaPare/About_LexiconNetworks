// Q5 Remove Numbers From String
// Input: let str = "w23e1lc2o4m7e8all";
// Expected Output: "Welcome all"

let str = "w23e1lc2o4m7e8all";

function removeNum(str){
    let outputStr=""
    const removeNum= str.replace(/\d+/g,"").replace("all"," all")
    return removeNum
}
console.log(removeNum(str))



































































// function removeNum(str){
//     let outputStr=""
//     const removeNum= str.replace(/\d+/g," ").replace("all"," all")

//     // console.log(removeNum)
//     // const spaceLast=removeNum.lastIndexOf(" ")
//     // const strSpce=removeNum.slice(0,spaceLast).replaceAll(" ","").split("")
//     // // console.log(strSpce)
//     // const arrstr=strSpce.filter(i=>i)
//     // // console.log(arrstr)
//     // return arrstr.join("")+removeNum.slice(spaceLast)

//     // console.log(strSpce.replace(" ",""))
//     // console.log(spaceLast)
// }