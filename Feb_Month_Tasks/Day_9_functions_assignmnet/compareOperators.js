function compareOperators(a, b) {
  return {
    looseEquality: a == b,
    strictEquality: a === b
    
  };
}
let result=compareOperators(5,"5")
let result2=compareOperators(null,undefined)

console.log("Loose Equality:", result.looseEquality);
console.log("Strict Equality:", result.strictEquality);