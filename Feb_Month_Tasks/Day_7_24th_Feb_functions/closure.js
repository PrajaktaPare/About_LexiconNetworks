function createCounter() {
  let count = 0;   
console.log("c : "+count)
  return function () {
    count++;
    console.log(count);
  };
  
}


let counterA = createCounter();

counterA(); // 1
counterA(); // 2
counterA(); // 3
