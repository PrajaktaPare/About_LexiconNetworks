// for...of.. Clean iteration over values (iterables)

function forOfExample(arr) {
  for (let value of arr) {
    console.log(value);
  }
}

forOfExample([10, 20, 30]);
forOfExample({id:1,name:"Pp"});

obj={ id: 1, name: "Prajakta" }
//for of for of iteration
// for (let i of obj)
// {
//     console.log(i)
// }

const arr=[
    { id: 1, name: "Prajakta" },
    { id: 2, name: "demo" }
]

for (const i of arr)
{
    console.log(i)
    
}
//const in for of why not error
//how the for loop work in background block scope 
//