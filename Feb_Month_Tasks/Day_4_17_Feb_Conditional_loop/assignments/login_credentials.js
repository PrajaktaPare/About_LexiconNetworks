
// Check login credentials (username + password).

let username = "admin ";
let password = " 1234";

//trim method
username=username.trim()
password=password.trim()

if (!username || !password) {

  console.log("Username or password missing");

} 
else if (username === "admin" && password === "1234") {

    console.log("Login successful");

}
else {

    console.log("Invalid credentials");

}


