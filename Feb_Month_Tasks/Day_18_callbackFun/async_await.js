// // //then catch and finally with a promise


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Start");
//         reject("Error");
//     }, 1000);
// });

// p.then(res => {
//     console.log("Then:", res);
//     return res ;
// })
// .catch(err => {
//     console.log("Catch :", err);
// })
// .finally(() => {
//     console.log("Finally : Always runs");
// })



// //=======================


async function getUserData(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        // console.log(response)
        if (!response.ok) {
            throw new Error(`User not found (Status: ${response.status})`);
        }

        const data = await response.json();

        if (!data.email) {
            throw new Error("Email is missing in user data");
        }
 
        return data;

    } catch (err) {
        console.log("Error:", err.message);
        throw err; // rethrow 
    }
}


(async () => {
    try {
        const user = await getUserData(1);
        console.log("User:", user.name);
        console.log("test")
    } catch (err) {
        console.log("Handled in main:", err.message);
    } finally {
        console.log("Done");
    }
})();

//status codes scenario 
//error types success created forbbiden authenticaton

// async function fn() {
//     try {
        
//         throw new Error("Fail");
        
//     } catch (e) {
//         console.log("Inside:", e.message);
//         // throw e;
//     }
// }

// (async () => {
//     try {

//         await fn();
       
//     } catch (e) {
//         console.log("Outside:", e.message);
//     }
// })();