// Create an array of objects for the books information
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
  },
];

// ------------------- Functions -------------------
// A function to remove current object from the array
function removeCard(index) {
  books.splice(index, 1);
}

// Create a function that will print the books cards
// Create a variable that will hold the books container
let booksContainer = document.getElementById('books-container');
// Loop through the books array
for (let index = 0; index < books.length; index++) {
  booksContainer.innerHTML += `<div class="book-card">
    <div class="book-title">${books[index].title}</div>
    <div class="book-author">${books[index].author}</div>
    <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
  </div>`;
}

// Variables to hold the input values
const titleInput = document.getElementById('title-input').value;
const authorInput = document.getElementById('author-input').value;

// A function to add a new book to the array
function addBook() {
  books.push({
    title: titleInput,
    author: authorInput,
  });
}
