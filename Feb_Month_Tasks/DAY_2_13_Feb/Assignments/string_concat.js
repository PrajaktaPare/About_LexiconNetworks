// let s="Good"
// let r="Evening"

// console.log(s+" "+r)


function formatText(choice, word1, word2) {
  let text = `${word1} ${word2}`;

  switch (choice) {
    case 1:
      return text.toUpperCase();

    case 2:
      return text.toLowerCase();

    case 3:
      return text;

    default:
      return "Invalid Choice";
  }
}


let s = "Good";
let r = "Evening";

console.log(formatText(1, s, r)); // UPPERCASE
console.log(formatText(2, s, r)); // lowercase
console.log(formatText(3, s, r)); // Normal
