function sortArr(arr){
    const numbers = arr.filter(item => typeof item === "number");
    const strings = arr.filter(item => typeof item === "string");
    numbers.sort((a, b) => a - b);
    return [...numbers, ...strings];
}

const arr=[4,3,"abc","cd",2]
console.log(sortArr(arr))//[2,3,4,"abc","cd"]
// //sort only numbers

const student={
    id:123,
    name:"stuName",
    result:[
        {Fy_Grade:"A",percentage:50.80},
        {Sy_Grade:"A+",percentage:60.90},
        {Ty_Grade:"O",percentage:70.80}
    ]
}

function avgPer(obj){
    // let sum=0
    // for(const i of obj.result){
        
    //         sum+=i.percentage
    //         // console.log(sum)
        
    // }
    // return `Avg percentage ${sum/3}`
    return student.result.reduce((acc,i)=>{
         acc=acc+i.percentage
         return (acc/3)
    },0)
}

console.log(avgPer(student))

