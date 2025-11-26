import React from "react";
import { useEffect, useState } from "react";

//components
import BookCard from "./card.jsx";
import SearchBar from "./searchBar.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";

//services
import fetchBooks from "../services/fetchBooks.js";
import fetchAuthors from "../services/fetchAuthors.js";

//utils
import getAuthorById from "../utils/getAuthor.js";
import searchBooks from "../utils/searchBooks.js";
import { getBookCategories } from "../utils/getBookcategories.js";

//This page allows the user to browse the list of books in the library.
const BookList = () => {
  const books = fetchBooks();
  const authors = fetchAuthors();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const bookCategories = getBookCategories(books);

  // Filter books by both search term and category
  const filteredBooks = searchBooks(books, searchTerm).filter((book) => {
    if (activeCategory === "all") return true;
    return book.category === activeCategory;
  });

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 py-8">
        <SearchBar
          onSearch={handleSearch}
          onClear={handleClear}
          placeholder="Search for books..."
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

        {/*   Books */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No books found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-4">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                author={getAuthorById(book.authorId, authors)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
