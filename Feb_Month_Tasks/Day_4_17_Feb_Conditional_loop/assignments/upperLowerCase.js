
// valueeck if a valuearacter is uppercase, lowercase, or digit.

let value = "A";

if (value >= "A" && value <= "Z") {
 
    console.log("Uppercase letter");

} 
else if (value >= "a" && value <= "z") {

    console.log("Lowercase letter");

} 
else if (value >= "0" && value <= "9") {
 
    console.log("Digit");

} 
else {

    console.log("Special value character");

}
//comparing by ASCI value inbuilt method 


let ch = "A";
let code = ch.charCodeAt(0);

if (code >= 65 && code <= 90) {
  console.log("Uppercase letter");
} 
else if (code >= 97 && code <= 122) {
  console.log("Lowercase letter");
} 
else if (code >= 48 && code <= 57) {
  console.log("Digit");
} 
else {
  console.log("Special character");
}