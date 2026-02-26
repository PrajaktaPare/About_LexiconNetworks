

//-------------------
// "use strict";
function demo() {

  x = 100;  
}

demo();
console.log(x); // 100

//-------------------

let name = "Global";

function test() {
  if(true){
    var name="test"
    console.log(name)//test
  }
  console.log(name)//
  
    // let name = "Local";

//   console.log(name);//Local
}

test();       // Local
console.log(name); // Global