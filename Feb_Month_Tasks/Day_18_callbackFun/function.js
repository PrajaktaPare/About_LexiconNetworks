// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayGood() {
//     console.log("Good!");
// }

// greet("demo", sayGood);

//=======================

// function getData(){
//     setTimeout(() => {
//         return "data";
//     }, 2000);
// }

// const result = getData();
// console.log(result); //undefined

// function getData(callback){
//     setTimeout(() => {
//         callback("data");
//     }, 2000);
// }

// getData((data)=>{
//     console.log(data)
// })

//================

// console.log("Start")

const id=setTimeout(() => {
    console.log("Inside function")
}, 3000);

// console.log(id)
clearTimeout(id)
// clearTimeout()


//cleartimeout****  



// console.log("end")

//=========================


// const id1 = setInterval(() => console.log("A"),4000);
// const id2 = setInterval(() => console.log("B"), 5000);

// clearInterval(id1); // stops only A

//====================


// function calc(a, b, callback) {
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function mul(x, y) {
//     return x * y;
// }

// console.log(calc(5, 3, add));    
// console.log(calc(5, 3, mul));


//=====================


// function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data : ",id)
//         resolve("success")

//     },3000)
//     })

// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })


//callbackhell pyramid of Doom

// console.log("fetching data1 ...")
// getData(1).then(()=>{
//     console.log("fetching data2...")
//     getData(2).then(()=>{
//         console.log("fetching data3...")
//         getData(3).then(()=>{
//             console.log("fetching data4...")
//             getData(4).then(()=>{
        
//     })
//     })
//     })
// })


//then and error
//states

// console.log("fetching data1 ...")
// getData(1)
//     .then(()=>{
//         console.log("fetching data2...")
//         return getData(2)})
//     .then(()=>{
//         console.log("fetching data3...")
//         return getData(3)})
//     .then(()=>{
//         console.log("fetching data4...")
//         return getData(4)})


// function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data : ",id)
//         resolve("success")

//     },3000)
//     })

// }
// (async function getAllData(){
//     getData(1)
//     await getData(2)
//     await getData(3)
// })();

// //async await without promises**

// //then and catch block and more for running in all cases

// //fetch
// //student marks example , reject 
















// function uploadFile(file){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("file uploaded successfully")
//         // callback(file)
//         resolve(file)
//     }, 2000);
//     })
// }

// function validateFile(file){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("File validated")
//         // callback(file)
//         resolve(file)
//     }, 2000);
//     })
// }

// function saveFile(file){
//     return new Promise((resolve,reject)=>{
//         console.log("file saved")
//         resolve()
//     })
// }

// // uploadFile("resume.pdf",()=>{
// //         validateFile("resume.pdf",()=>{
// //             saveFile("resume.pdf")
// //         })
// //     })


// // uploadFile("resume.pdf")
// // .then(()=>{
// //     return validateFile("resume.pdf")
// // })
// // .then(()=>{
// //     saveFile("resume.pdf")
// // })


// async function run(){
//     const file = await uploadFile("resume.pdf");
//     await validateFile(file);
//     await saveFile(file);
// }












