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
];

// Create a function that will print the books cards
    // Create a variable that will hold the books container
    let booksContainer = document.getElementById('books-container');
    // Loop through the books array
    for (let i = 0; i < books.length; i++) {
        books.innerHTML +=  
          <div class="book-card">
            <div class="book-title">Book Title</div>
            <div class="book-author">Book Author</div>
          </div>
        // Print the book card
    }
