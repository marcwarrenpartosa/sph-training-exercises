import React from "react";
import { useEffect } from "react";

//components
import BookCard from "../components/card.jsx";

//services
import getBooks from "../services/books.js";
import data from "../db/data.js";

//This page allows the user to browse the list of books in the library.
const BookList = () => {
  const books = getBooks();

  // Helper function to get author information
  const getAuthor = (authorId) => {
    return data.Authors.find((author) => author.id === authorId);
  };

  console.log(books);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Book Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            author={getAuthor(book.authorId)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
