

// Promise.all (Fails Fast)

const p1 = Promise.resolve("P1 Success");
const p2 = Promise.reject("P2 Failed");
const p3 = new Promise(resolve => setTimeout(() => resolve("P3 Success"), 2000));

// Promise.all([p1, p2, p3])
//     .then(res => console.log("ALL:", res))
//     .catch(err => console.log("ALL Error:", err));


// Promise.allSettled (Safe)

Promise.allSettled([p1, p2, p3])
    .then(results => console.log("ALL SETTLED:", results));


// // Fetch API Example


// async function fetchData(url) {
//     try {
//         const res = await fetch(url);

//         if (!res.ok) {
//             throw new Error(`HTTP Error: ${res.status}`);
//         }

//         const data = await res.json();
//         return data;

//     } catch (err) {
//         console.log("Fetch Error:", err.message);
//         return null;
//     }
// }


// // // 5. Multiple API Calls


// const urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/2",
//     "https://jsonplaceholder.typicode.com/users/999" // invalid
// ];

// //Using Promise.all (fails if one fails)
// // (async function () {
// //     try {
// //         const results = await Promise.all(urls.map(fetchData));
// //         console.log("FailFast:", results);
// //     } catch (err) {
// //         console.log("FailFast Error:", err);
// //     }
// // }
// // )()
// // // Using Promise.allSettled
// (async function () {
//     const results = await Promise.allSettled(urls.map(fetchData));
//     console.log("Safe Results:", results);
// })()


