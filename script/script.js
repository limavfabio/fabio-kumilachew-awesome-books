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

// Books constructor
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Create a function that will print the books cards
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

// A click listener for the add button to add inputs value as an object to the books array
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  let newBook = new Book(titleInput, authorInput);
  books.push(newBook);
  loadBook(books.length -1);
});

// Function to load newly added books
function loadBook(index) {
  booksContainer.innerHTML += `<div class="book-card">
  <div class="book-title">${books[index].title}</div>
  <div class="book-author">${books[index].author}</div>
  <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
</div>`;
}
