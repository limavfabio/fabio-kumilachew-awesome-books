//----------------- Variables
// Create a function that will print the books cards
let booksContainer = document.getElementById('books-container');
let bookCard = document.getElementsByClassName('book-card');
// Variables to hold the input ids
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

// Create an array of objects for the books information
const books = [];

// Books constructor
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// ------------------- Functions -------------------
// A function to remove current object from the array
function removeCard(index) {
  books.splice(index, 1);
  reloadBooks();
}
// A function to reload the books cards
function reloadBooks() {
  booksContainer.innerHTML = '';
  for (let index = 0; index < books.length; index++) {
    booksContainer.innerHTML += `<div class="book-card">
        <div class="book-title">${books[index].title}</div>
        <div class="book-author">${books[index].author}</div>
        <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
      </div>`;
  }
}

// Loop through the books array

// A click listener for the add button to add inputs value as an object to the books array
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  let newBook = new Book(titleInput.value, authorInput.value);
  books.push(newBook);
  loadBook(books.length - 1);
});

// Function to load newly added books
function loadBook(index) {
  booksContainer.innerHTML += `<div class="book-card">
  <div class="book-title">${books[index].title}</div>
  <div class="book-author">${books[index].author}</div>
  <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
</div>`;
}
