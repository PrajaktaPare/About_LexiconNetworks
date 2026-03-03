let days=new Array();
let months=[]

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length);
console.log(fruits.reverse())//tc sc
fruits.push("Pear");//tc o(1)
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.unshift("Grapes")//o(n)
console.log(fruits)
fruits.shift()
console.log(fruits)

for (let f of fruits)
{
    console.log(f)
}

let afruits=fruits.toString()
console.log(afruits.split(","))

console.log(fruits.join(""))
delete fruits[1]
console.log(fruits)


//splice insert remove replace (index,deletecount,items to add) 

console.log(" ")
let arr = ["I", "study", "JavaScript"];
arr.splice(-2,1)
console.log(arr)
// console.log(arr.splice(1, 1,"demo"))//this will remove from 1 index 1 element
// console.log(arr)

arr.splice(2, 0, "complex", "language");
console.log(arr)
arr.splice(2,1,"coding")
arr.splice(2,1)

arr.splice()
console.log( " ")
let arr1 = ["1", "2", "3", "4"]
console.log( arr1.slice(1, 3) ); // e,s (copy from 1 to 3)


console.log( arr1.slice(-2) ); // s,t (copy from -2 till the end)

console.log(arr1.concat(["5","6"]))
console.log(arr1.concat("5","6"))

arr1.forEach((item,index,array)=>{
    console.log(index)
})

console.log(arr1.includes("3"))
let array=[
    {id:1,name:"pp"},
    "string",88
]
console.log("includess")
console.log(array.includes({id:1,name:"pp"}))//check it
console.log(array.includes("string"))
console.log(array.includes(88))



let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

let user = users.find(item=>item.id==1)//return that particular object

console.log(user)

console.log(users.findIndex(item=>item.name=="Pete"))
console.log(users.findLastIndex(item=>item.name=="John"))


let numbers=[1,2,3,4,5,6,7,8,9,10]
let n1=numbers.filter(item=>item%2==0)
console.log(n1)

let n2=numbers.map((item)=>{
    return item**2
} )
console.log(n2)

let n=[45,76,34,26,19,8,76,66]
console.log(n.reduce((sum,c)=>sum+c,0))
console.log(n.sort(
    (a,b)=>a-b
))
console.log(n.join("-"))
// Default sort() → string comparison

// (a - b) → ascending numbers

// (b - a) → descending numbers

let name="fn,ln"
console.log(name.split(","))

//flat
const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a2 = a1.flat(Infinity);
console.log(a2);//[1,2,3,4,5,6,7]







//-----------------------------------------------------

/**
 A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
 */