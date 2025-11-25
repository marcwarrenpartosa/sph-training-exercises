import React from "react";

//components
import BookCard from "../components/card.jsx";

//services
import fetchTransactions from "../services/fetchTransactions.js";
import fetchBooks from "../services/fetchBooks.js";
import fetchMembers from "../services/fetchMembers.js";
import fetchAuthors from "../services/fetchAuthors.js";

//utils
import getAuthor from "../utils/author.js";

const BorrowedBooks = () => {
  const transactions = fetchTransactions() || [];
  const books = fetchBooks() || [];
  const members = fetchMembers() || [];
  const authors = fetchAuthors() || [];

  // Filter transactions to get only borrowed books
  const borrowedTransactions = transactions.filter(
    (transaction) =>
      transaction.status === "borrowed" && !transaction.returnDate
  );

  // Get the actual book objects for borrowed books
  const borrowedBooks = borrowedTransactions
    .map((transaction) => books.find((book) => book.id === transaction.bookId))
    .filter((book) => book !== undefined);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Borrowed Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {borrowedBooks.map((book) => {
          const borrowTransaction = borrowedTransactions.find(
            (transaction) => transaction.bookId === book.id
          );
          const borrowedByMember = members.find(
            (member) => member.id === borrowTransaction?.memberId
          );

          return (
            <BookCard
              key={book.id}
              book={book}
              author={getAuthor(book.authorId, authors)}
              borrowedBy={borrowedByMember}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BorrowedBooks;
