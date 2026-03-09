//Create an object movie with title, rating. Check if property rating exists.

const movie={
    title:"movieName",
    rating: 8
}

function checkProperty(obj){
    if ("rating" in obj){
        return `Has Rating`
    }
    else{
        return `Dont have rating`
    }
}

console.log(checkProperty(movie))








//const parent = { genre: "Action" };
// const movie = Object.create(parent);

// movie.title = "Inception";
// movie.rating = 9;

// console.log("genre" in movie);             // true (inherited from parent)
// console.log(movie.hasOwnProperty("genre")); // false (not own property)