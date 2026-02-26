function scopes()
{
    var num=1
    console.log(num)
    if(true){
       let num=2
        console.log(num)//2
    }
    console.log(num)//1

}

scopes()

//---------------------------

let x = 100;

function show() {
    // let x=2
  console.log(x);
}

function callShow() {
     let x = 200;
    show();
}

callShow(); // Output: 100