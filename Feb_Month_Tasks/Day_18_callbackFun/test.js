// using pure callback

//function getDataByIdCB(callback){
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response=>response.json())
//     .then(data=>{
//         callback(null,data);
//     })
//     .catch(error=>{
//         callback(error,null);
//     })
// }

// getDataByIdCB((err,value)=>{
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log("Data from API : ",value)
//     }
// })

//using promises 

// function getDataByID(){
//     return fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response=>response.json())
// }


// getDataByID().then(data=>{
//     console.log("data : ",data)
// }).catch(err=>{
//     console.log("Error : ",err)
// })


//using async function



async function getDataByID(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // console.log("respone : ",response)//promise without resolve
        
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);//[object Promise]//object in pending state if we dont handle error
        // }
        const data = await response.json();
        console.log("API call")

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}


(async function main(){
console.log("start")
const data=await getDataByID(1)
console.log(data)//promise
console.log("end")
})();
