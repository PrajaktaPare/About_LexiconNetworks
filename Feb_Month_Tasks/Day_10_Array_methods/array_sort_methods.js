// console.log("concat : ");
// const cNums = [1, 2];
// const cStrs = ["a", "b"];
// const cMixed = [true, { x: 1 }];

// console.log("nums + nums:", cNums.concat([3,4]));
// console.log("nums + strs:", cNums.concat(cStrs));
// console.log("mixed:", cNums.concat(cMixed));
// console.log("original nums:", cNums); // unchanged


// console.log("\nindexOf() & lastIndexOf() ");//checks with ===
// const idxArr = [10, "10", 10, { id: 1 }, 10];

// console.log("indexOf 10:", idxArr.indexOf(10));          // number
// console.log("indexOf '10':", idxArr.indexOf("10"));     // string
// console.log("lastIndexOf 10:", idxArr.lastIndexOf(10));
// console.log("indexOf object:", idxArr.indexOf({ id: 1 })); // -1 (different reference)
// const index = idxArr.findIndex(item => item?.id === 1);
// console.log("Find Index of obj",index); // 3

// console.log("\nincludes() ");
// const incArr = [NaN, 0, "false", "js"];

// console.log("includes NaN:", incArr.includes(NaN));   // true
// console.log("indexOf NaN:", incArr.indexOf(NaN));     // -1
// console.log("includes false:", incArr.includes(false));//false
// console.log("includes 'js':", incArr.includes("js"));//true


// console.log("\nsort()");
const sortNums = [10, 2, 30, 4];
const sortStrs = ["banana", "apple", "grape"];
const sortMixed = [10, "2", 1, "20"];

console.log("before sort nums:", sortNums);
sortNums.sort();
console.log("after default sort nums:", sortNums); // string sort
sortNums.sort((a, b) => Number(a) - Number(b));
console.log("Sorting by type casting : ",sortNums);

const sortNumsCorrect = [10, 2, 30, 4];
sortNumsCorrect.sort((a, b) => a - b);
console.log("numeric sort:", sortNumsCorrect);

console.log("before sort strs:", sortStrs);
sortStrs.sort();
console.log("after sort strs:", sortStrs);

console.log("before sort mixed:", sortMixed);
sortMixed.sort();
console.log("after default sort mixed:", sortMixed);


// console.log("\nreverse()");
// const revNums = [1, 2, 3];
// const revStrs = ["a", "b", "c"];

// console.log("before reverse nums:", revNums);
// revNums.reverse();
// console.log("after reverse nums:", revNums);

// console.log("before reverse strs:", revStrs);
// revStrs.reverse();
// console.log("after reverse strs:", revStrs);


// console.log("\njoin()  toString()");
// const joinNums = [1, 2, 3];
// const joinStrs = ["js", "py", "go"];
// const joinMixed = [1, true, null, "x", {}];

// console.log("join nums:", joinNums.join("-"));
// console.log("join strs:", joinStrs.join(" | "));
// console.log("join mixed:", joinMixed.join(", "));
// console.log("toString mixed:", joinMixed.toString());
// console.log("empty array toString:", [].toString());


// console.log("\ncopyWithin()");
// const cwNums = [1, 2, 3, 4, 5];
// const cwStrs = ["a", "b", "c", "d"];

// console.log("before cw nums:", cwNums);
// cwNums.copyWithin(2, 0, 2);   // copy [1,2] into index 2
// console.log("after cw nums:", cwNums);

// console.log("before cw strs:", cwStrs);
// cwStrs.copyWithin(1, 2);     // copy from index 2 to index 1
// console.log("after cw strs:", cwStrs);

// console.log("before cw strs:", cwStrs);
// cwStrs.copyWithin(1);     // copy from index 2 to index 1
// console.log("after cw strs:", cwStrs);


console.log("\nflat");
const flatNums = [1, [2, [3]]];
const flatStrs = ["a", ["b", ["c"]]];
const flatMixed = [1, ["x", [true, [null]]]];

console.log("flat nums depth 1:", flatNums.flat(1));
console.log("flat nums depth 2:", flatNums.flat(2));

console.log("flat strs depth 1:", flatStrs.flat(1));
console.log("flat strs Infinity:", flatStrs.flat(Infinity));

console.log("flat mixed depth 2:", flatMixed.flat(2));
console.log("flat mixed Infinity:", flatMixed.flat(Infinity));

const data = [
  [1, 2],
  [3, 4, 2],
  [5],
  [2, 6, 1]
];

//o/p - 
// "1","Hello","3","4","2","5","2","6","1"
let data1= data.flat(1);
console.log(data1)
data1.splice(1,1,"Hello")
console.log(data1)
const dataDuplicate=[...new Set(data1)]
console.log("125 :",dataDuplicate.sort((a,b)=>a-b))//
console.log("125 :",dataDuplicate.sort((a,b)=>b-a))//

//map filter foreach reduce 

const numbersOnly = dataDuplicate.filter(x => typeof x === "number");

console.log(numbersOnly.sort((a,b) => a - b)); // Ascending
console.log(numbersOnly.sort((a,b) => b - a)); // Descending