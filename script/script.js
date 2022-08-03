/* eslint-disable max-classes-per-file */

// ----------------- Variables

// Variable to hold the outputs
const booksContainer = document.getElementById('books-container');
// Variables to hold the input ids
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

// Create an array of objects for the books information
class BooksClass {
  constructor() {
    return [];
  }
}
// Create a new books object
const books = new BooksClass();

// Books array to store the books information
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Method to load newly added books
  static loadBook(index) {
    booksContainer.innerHTML += `<div class="book-card">
      <div class="book-title"><strong>"${books[index].title}"</strong>&nbsp;by</div>
      <div class="book-author">${books[index].author}</div>
      <button class="card-remove-button" onclick="Book.removeCard(${index})">Remove</button>
      </div>`;
  }

  // A Method to remove current object from the array
  static removeCard(index) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    Book.reloadBooks();
  }

  // A Method to reload the books cards
  static reloadBooks() {
    booksContainer.innerHTML = '';
    for (let index = 0; index < books.length; index += 1) {
      booksContainer.innerHTML += `<div class="book-card">
      <div class="book-title"><strong>"${books[index].title}"</strong>&nbsp;by</div>
      <div class="book-author">${books[index].author}</div>
      <button class="card-remove-button" onclick="Book.removeCard(${index})">Remove</button>
      </div>`;
    }
  }
}

// ------------------- Functions -------------------

// ------------------- get data from local storage and reload the books cards
// Parse object from localStorage and store to a variable
const storedBooks = JSON.parse(localStorage.getItem('books'));
// If there is a storedBooks array, set the books array to the storedBooks array
if (storedBooks) {
  books.push(...storedBooks);
  Book.reloadBooks();
}

// A click listener for the add button to add inputs value as an object to the books array
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(titleInput.value, authorInput.value);
  books.push(newBook);
  Book.loadBook(books.length - 1);
  localStorage.setItem('books', JSON.stringify(books));
});
