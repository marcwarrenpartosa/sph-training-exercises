import React from "react";

//components
import BookCard from "./card.jsx";

//services
import fetchTransactions from "../services/fetchTransactions.js";
import fetchBooks from "../services/fetchBooks.js";
import fetchMembers from "../services/fetchMembers.js";
import fetchAuthors from "../services/fetchAuthors.js";

//utils
import getAuthorById from "../utils/getAuthor.js";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Borrowed Books
          </h1>
          <p className="text-gray-600">Currently checked out items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
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
                author={getAuthorById(book.authorId, authors)}
                borrowedBy={borrowedByMember}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
