function checkAge(age) {
  if (age < 18) return "Minor";
  if (age < 60) return "Adult";
  return "Senior";
}

console.log(checkAge(21))


function findEven(nums) {
  for (let n of nums) {
    if (n % 2 === 0) 
        return n   
  }
  return null;
}
const nums=[35,65,76,89,98,70]
console.log(findEven(nums))