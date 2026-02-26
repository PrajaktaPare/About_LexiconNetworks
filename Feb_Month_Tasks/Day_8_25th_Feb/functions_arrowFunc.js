function simplefunc(arr)
{
    console.log("Simple function :")
    for(let i of arr)
    {
        console.log(i)
    }


}
simplefunc([1,2,3,4])

let arrowfunc=(arr)=>{
    console.log("Arrow function :")

    for(let i of arr){
        console.log(i)
    }
}
arrowfunc([1,2,3,4])


let obj={
    id:1,
    name:"demo",
    func: function()
    {   
        console.log(this)
        console.log(`Id ${this.id} and Name ${this.name}`)
    },

    arrowfunc:()=>
    {
        console.log(this)

        console.log(`Id ${this.id} and Name ${this.name}`)
        
    }

}
obj.func()
obj.arrowfunc()

function simplefunc(arr)
{
    
    console.log("Simple function :")
    for( i of arr)
    {
        console.log(i)

    }
// console.log(i)

}
simplefunc(['a','b','c'])

function arrowFuncUse(nums){
   

    const squares = nums.map(n => n * n);
    const evens = nums.filter(n => n % 2 === 0);

    console.log(squares); // [1, 4, 9, 16]
    console.log(evens);   // [2, 4]
}

 const nums = [1, 2, 3, 4];
 arrowFuncUse(nums)


 console.log(this)//{}


var variable=12
let objnew={
    fname:"demo",

}
console.log("80 :",this.variable)//this is refreing to global scope but then whay varible is not showing is there any other path
let a=()=>
{
    console.log("arrow function: ")
    console.log(variable)
}
a()

























//  let obj2 = {
//   id: 1,
//   showLater() {
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000);
//     console.log("This will run 1st")
//   }
// };

// obj2.showLater();