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
    
}

// Create a function that will print the books cards
// Create a variable that will hold the books container
let booksContainer = document.getElementById('books-container');
// Loop through the books array
for (let i = 0; i < books.length; i++) {
  booksContainer.innerHTML += `<div class="book-card">
    <div class="book-title">${books[i].title}</div>
    <div class="book-author">${books[i].author}</div>
    <button class="card-remove-button" onclick="removeCard(${books[i]})">Remove</button>
  </div>`;
}
