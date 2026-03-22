// 3. Task Manager (Async + Date)

// Simulate task system with async operations.

// Task Object:
// {
//   id,
//   title,
//   completed,
//   createdAt
// }
// Tasks:

const tasks = [
  {
    id: 1,
    title: "Complete JavaScript assignment",
    completed: false,
    createdAt: "2026-03-20T10:30:00"
  },
  {
    id: 2,
    title: "Attend team meeting",
    completed: true,
    createdAt: "2026-03-21T09:00:00"
  },
  {
    id: 3,
    title: "Practice DSA questions",
    completed: false,
    createdAt: "2026-03-23T14:15:00"
  },
  {
    id: 4,
    title: "Read documentation",
    completed: true,
    createdAt: "2026-03-21T18:45:00"
  },
  {
    id: 5,
    title: "Push code to GitHub",
    completed: false,
    createdAt: "2026-03-23T20:00:00"
  }
];

// console.log(tasks[4].completed)
// // Create async function to fetch tasks (Promise / async-await)

// async function fetchTask(){
//     return new Promise((resolve,reject)=>{
//         console.log("Fetching tasks...")
//         setTimeout(() => {
//             const tTitle= tasks.map((i)=>i.title)
//             if(tTitle.length>0){
//                 resolve(tTitle)
//             }
//             else{
//                 reject("No tasks found ")
//             }
//         }, 2000);
        
//     })
// }

// // fetchTask().then((data)=>{
// //     console.log(data)
// // })

// (async function(){
//     try{
//         const data=await fetchTask()
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// })()


// // Add new task (push)

// function addNewTask(arr){
//     arr.push(
//             {
//         id: 6,
//         title: "Preparation",
//         completed: false,
//         createdAt: "2026-03-21T20:00:00"
//         }
//     )
//     return arr
// }

// console.log("99 : ",addNewTask(tasks))


// Mark task complete (find + update)

// function markComplete(arr,id){
//     const index= arr.find((i)=>i.id===id)
//     index.completed=true
//     return arr
// }

// console.log("109 : ",markComplete(tasks,1))

// // Delete task (splice)

// function deleteTaskById(arr,id){
//     const index=arr.findIndex((i)=>i.id===id)
//     arr.splice(index,1)
//     return arr
// }

// console.log("119 : ",deleteTaskById(tasks,5))


// Get today's tasks (Date methods)

function getTodaysTask(arr){
    return arr.filter((i)=>new Date(i.createdAt).toDateString()===(new Date()).toDateString())
}

console.log("127 : ",getTodaysTask(tasks))

// Sort by latest (sort + Date)

function sortByDate(arr){
    return arr.sort((i,j)=>new Date(j.createdAt)-new Date(i.createdAt))
}

console.log("134 : ",sortByDate(tasks))


// Handle errors (try-catch)

