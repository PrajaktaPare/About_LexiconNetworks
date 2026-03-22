// function callback(error, data) {}

function loginUser(username,password,callback){
    console.log("validating user ....")
    setTimeout(() => {
        const valid=true
        if(!valid){
            callback("invalid credentials",null)

        }
        else{
            callback(null,{username,token:"abc"})
        }
    }, 3000);
}

function getProfile(user,callback){
    console.log("fetching profile...")
    setTimeout(() => {
        const proflile={
            username: "demo",
            age:22,
            email:"demo@gmail.com"
            
        }
        callback(null, proflile)  
      }, 3000);
}

function showDashboard(proflile){
    console.log("Welcome", proflile.username);
    console.log("Email:", proflile.email);
}

loginUser("demo","pass@123",(err, user)=>{
    if(err){
        console.log(err);
        return;
    }

    getProfile(user,(err, profile)=>{
        if(err){
            console.log(err);
            return;
        }

        showDashboard(profile);
    })
})


// // loginUser("demo","pass@123")
// //     .then((user)=>{
// //         return getProfile(user);
// //     })
// //     .then((profile)=>{
// //         showDashboard(profile);
// //     })
// //     .catch((err)=>{
// //         console.log("Error:", err);
// //     });


// async function run(){
//     const user = await loginUser("demo","pass@123");
//     const profile = await getProfile(user);
//     showDashboard(profile);
// }

// run();

//errors handling 










function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("validating user ....");

        setTimeout(() => {
            const valid = true;

            if (!valid) {
                reject(new Error("invalid credentials"));
            } else {
                resolve({ username, token: "abc" });
            }
        }, 3000);
    });
}



function getProfile(user) {
    return new Promise((resolve, reject) => {
        console.log("fetching profile...");

        setTimeout(() => {
            const profile = {
                username: user.username,
                age: 22,
                email: "demo@gmail.com"
            };

            if (!profile.email) {
                reject(new Error("Email missing"));
            } else {
                resolve(profile);
            }
        }, 3000);
    });
}


async function run() {
    try {
        const user = await loginUser("demo", "pass@123");

        const profile = await getProfile(user);

        showDashboard(profile);

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        console.log("Process completed");
    }
}

run();

//multiple promise execution 
// allsettled 
//if one promise get rejected
//fetch api multiple API's if one of them is rejceting or giving error
//error handling 
//status codes and statuses 






