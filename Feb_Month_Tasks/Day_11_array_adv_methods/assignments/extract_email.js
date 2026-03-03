const users = [
  { id: 1, name: "kunal", email: "kunal@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  { id: 3, name: "Amit", email: "amit@gmail.com" }
];
// Extract all emails from user objects

function extractEmail(arr){
    return arr.map(user=>user.email)
}

console.log(extractEmail(users))