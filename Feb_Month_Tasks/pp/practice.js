// const arr=[1,2,"a",3,"b",4]
// function numArr(arr){
//     const a=arr.filter((i)=>typeof i ==="number").reduce((acc,sum)=>acc+sum,0)
//     // console.log(a)
//     return a
// }

// console.log("sum : ",numArr(arr))

// const arr=[1,2,"a",3,"b",4]
// function numArr(arr){
//     const a=arr.filter((i)=>typeof i ==="number").reduce((cnt)=>cnt+1,0)
//     // console.log(a)
//     return a
// }

// console.log("count : ",numArr(arr))

// const s=["apple","banana","cat"]
// function toupper(s){
//     return s.map((i)=>i.toUpperCase())
// }
// console.log(toupper(s))


// const duplicateArr=[1,2,2,3,4,"4",5]

// function removeDuplicate(arr){
//     return arr.reduce((acc,i)=>{
//         if(acc.indexOf(i)===-1){
//             acc.push(i)
//         }
//         return acc
//     },[])
// }

// console.log(removeDuplicate(duplicateArr))

// const arr=[3,7,"a",2,9,"10",4]

// function arrMax(arr){
//     return Math.max(...arr)
// }

// console.log(arrMax(arr))

// const arr = [1,2,3,4,5,6]
// function evenNum(arr){
//     return arr.filter((i)=>i%2==0)
// }
// console.log(evenNum(arr))

// const arr=[2,3,4]
// function sqArr(arr){
//     return arr.map((i)=>i**2)
// }

// console.log(sqArr(arr))

// const objArr=[
//  {name:"A",salary:2000},
//  {name:"B",salary:3000},
//  {name:"C",salary:4000}
// ]

// function totalSalary(arr){
//     return arr.reduce((acc,i)=>acc+i.salary,0)
// }

// console.log(totalSalary(objArr))

// Get names of employees with salary > 2500

// function salaryEmp(arr){
//     return arr.filter((i)=>{
//         return i.salary>2500
//     })
// }

// console.log(salaryEmp(objArr))

// 10. Find first employee with salary > 3000

// function findOne(arr){
//     return arr.find((i)=>i.salary>2500)
// }

// console.log(findOne(objArr))

// const user={name:"A",age:20}

// function userAgeExist(arr){
//     return "age" in arr
// }

// console.log("Age exist in array : ",userAgeExist(user))

// const obj={a:1,b:2,c:3,d:null}

// function objCount(obj){
//     return Object.keys(obj).length
// }

// console.log(objCount(obj))

// const obj={name:"A",age:20}
// function objToArr(obj){
//     return Object.entries(obj)
// }

// console.log(objToArr(obj))

// const obj={a:1,b:2}
// const obj2={c:3,d:4}

// console.log({...obj,...obj2})

// const company={
//  dept:[
//    {employees:[{salary:2000},{salary:3000}]},
//    {employees:[{salary:4000}]}
//  ]
// }
// function nestedSalary(company){
//     let sum=0
//     for(const i of company.dept){
//         for(const j of i.employees){
//             sum+=j.salary
//         }
//     }
//     return sum
// }

// console.log(nestedSalary(company))

// 17. Get all employee names from nested structure


// const arr=[1,[2,3],[4,[5]]]
// console.log(arr.flat(2))

// const arr=[
//  {name:"A",age:30},
//  {name:"B",age:20}
// ]

// function sortArr(arr){
//     return arr.sort((a,b)=>a.age-b.age)
// }
// console.log(sortArr(arr))

// const arr=["apple","banana","apple","orange"]

// function cntArr(arr){
//     const c={}
//     let cnt=0
//     for(const i of arr){
//        c[i] = (c[i] || 0) + 1
//     }
//     return c
// }

// console.log(cntArr(arr))

// const arr= [0,1,0,3,12]
// function moveZero(arr){
//     const zeroArr=arr.filter((i)=>i!==0)
//     const nonzeroArr=arr.filter((i)=>i==0)
//     return [...zeroArr,...nonzeroArr]
// }
    

// console.log(moveZero(arr))


//palindrome string

// s="prajakta"
// s1="madam"

// function palindrome(str){
//     return str==str.split("").reverse().join("")
// }

// console.log(palindrome(s))
// console.log(palindrome(s1))


//  Write a function that accepts a string as a parameter and converts the first letter of each
// // word of the string in upper case.

// function fchartoupper(s){
//     return s
//         .split(" ")
//         .map(i => i[0].toUpperCase() + i.slice(1))
//         .join(" ")
// }
// console.log(fchartoupper("hello ji gy dsgfudbdjfvc hukj hiu"))

// Write a function that accepts a string as a parameter and find the longest word within the
// // string

// function longestStr(s){
//     let l=0
//     let sResult=""
//     for(const i of s.split(" ")){
//       if(i.length>l){
//         l=i.length
//         sResult=i
//       }
      
//     }
//     return sResult
// }
// console.log(longestStr("hi hello bye bye byebye tata"))



