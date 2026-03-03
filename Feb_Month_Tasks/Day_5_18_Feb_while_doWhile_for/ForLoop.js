function forLoopExample(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

forLoopExample([10, 20, 30]);
//use 2 condition in for loop
//can i use it without semicolon
const arr=[10,20,30]
let l=arr.length
console.log(l)
console.log(arr[l-1])
 for (let i = l-1; i >=0; i--) {
    // console.log("abc")
    console.log(i, arr[i]);
  }       
const a=[12,45,66,88,70,95,46,74,33,28]//10 0-9
for (let i=0;i<a.length;i=i+2)
{
    console.log(a[i])//[45,88,95,74,28] //[12,66,70,46,33]
}


//working
//executing 