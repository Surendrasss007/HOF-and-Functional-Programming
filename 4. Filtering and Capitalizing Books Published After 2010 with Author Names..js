function filterAndCapitalizeBooks(books) {
  // Filter books published after 2010
  const filteredBooks = books.filter(book => book.year >= 2010);

  // Capitalize author names in the filtered books
  const capitalizedBooks = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year
  }));

  return capitalizedBooks;
}

// Example usage
const books = [
  { title: "Book 1", author: "author1", year: 2005 },
  { title: "Book 2", author: "author2", year: 2015 },
  { title: "Book 3", author: "author3", year: 2008 },
  { title: "Book 4", author: "author4", year: 2012 }
];

const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
console.log(filteredAndCapitalizedBooks);
