import React, { useState } from "react";

//components
import BookCard from "./card.jsx";
import SearchBar from "./searchBar.jsx";
import { Tabs, TabsList, TabsTrigger } from "./tabs.jsx";

//services
import fetchTransactions from "../services/fetchTransactions.js";
import fetchBooks from "../services/fetchBooks.js";
import fetchMembers from "../services/fetchMembers.js";
import fetchAuthors from "../services/fetchAuthors.js";

//utils
import getAuthorById from "../utils/getAuthor.js";
import searchBooks from "../utils/searchBooks.js";
import { getBookCategories } from "../utils/getBookcategories.js";

const BorrowedBooks = () => {
  const transactions = fetchTransactions() || [];
  const books = fetchBooks() || [];
  const members = fetchMembers() || [];
  const authors = fetchAuthors() || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter transactions to get only borrowed books
  const borrowedTransactions = transactions.filter(
    (transaction) =>
      transaction.status === "borrowed" && !transaction.returnDate
  );

  // Get the actual book objects for borrowed books
  const borrowedBooks = borrowedTransactions
    .map((transaction) => books.find((book) => book.id === transaction.bookId))
    .filter((book) => book !== undefined);

  const bookCategories = getBookCategories(borrowedBooks);

  // Filter borrowed books by both search term and category
  const filteredBooks = searchBooks(borrowedBooks, searchTerm).filter(
    (book) => {
      if (activeCategory === "all") return true;
      return book.category === activeCategory;
    }
  );

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Borrowed Books
          </h1>
          <p className="text-gray-600">Currently checked out items</p>
        </div>

        <SearchBar
          onSearch={handleSearch}
          onClear={handleClear}
          placeholder="Search borrowed books..."
        />

        {/* Search Results Indicator */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Displaying search results for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Categories */}
        <div className="mb-6 w-full overflow-x-auto scrollbar-hide">
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="flex w-max mx-auto gap-2 px-4">
              <TabsTrigger value="all">All</TabsTrigger>
              {bookCategories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No borrowed books found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {filteredBooks.map((book) => {
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
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
