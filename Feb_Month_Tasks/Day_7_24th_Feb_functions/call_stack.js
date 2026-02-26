function a() {
  console.log("A start");
  b();
  console.log("A end");
}

function b() {
  console.log("B start");
  c();
  console.log("B end");
}

function c() {
  console.log("C running");
}

a();


//A start

//b start

//c is running
//b end
//a end

//asynchornous functions
//setTimeout 