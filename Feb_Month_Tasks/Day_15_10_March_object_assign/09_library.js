// Q9. Given the following object:
// let library = {
//     books: [
//         { title: "The Alchemist", author: "Paulo Coelho", available: true },
//         { title: "Atomic Habits", author: "James Clear", available: false },
//         { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", available: true }
//     ]
// };
//   A) Print the author of the second book.
//   B) Find all books that are available.
//   C) Add a new book { title: "Deep Work", author: "Cal Newport", available: true } to the library.

let library = {
    books: [
        { title: "The Alchemist", author: "Paulo Coelho", available: true },
        { title: "Atomic Habits", author: "James Clear", available: false },
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", available: true }
    ]
};

// console.log("The author of the second book : ",library.books[1].author)


function available_books(obj){
    return obj.books?.filter(book=>book.available) ??[]
}

console.log("Available books : ",available_books(library))

library.books.push({ title: "Deep Work", author: "Cal Newport", available: true })
console.log(library)