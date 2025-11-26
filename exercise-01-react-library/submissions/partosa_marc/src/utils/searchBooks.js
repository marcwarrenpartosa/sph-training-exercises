
//this function searches for books by title from a given list of books
const searchBooks = (books, searchTerm) => {
  if (!searchTerm.trim()) {
    return books;
  }
  
  return books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default searchBooks;
