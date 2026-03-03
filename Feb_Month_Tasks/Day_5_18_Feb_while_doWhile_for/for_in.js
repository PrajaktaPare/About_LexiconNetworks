// // for...in  Iterate over keys (object properties)

function forInExample(obj) {
  for (let [key,value] in Object.entries(obj)) {
    console.log(key,value)
    // console.log(key, obj[key]);

  }
}

forInExample({ id: 1, name: "Prajakta" });

//how we can access key and values at same time in same without methods 

//declare array
//PS D:\About_LexiconNetworks\Feb_Month_Tasks\Day_5_18_Feb_while_doWhile_for> node .\for_in.js
// i d
// n a


let s="demo"
for(let i in s){
    if(i==2){
        continue;
 }//d e 
    console.log(s[i])
}//
console.log("hi")
//try to console evrything 
//what is i 
//use const let and all