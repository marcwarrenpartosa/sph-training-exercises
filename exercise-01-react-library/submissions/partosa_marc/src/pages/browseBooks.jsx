import React from "react";

//components
import Button from "../components/button.jsx";
import BookList from "../components/booklist.jsx"; // Add .jsx extension
import BorrowedBooks from "../components/BorrowedBooks.jsx"; // Add .jsx extension and check casing
import Input from "../components/input.jsx";

const BrowseBooks = () => {
  return (
    <>
      <BookList></BookList>
      <BorrowedBooks></BorrowedBooks>
    </>
  );
};

export default BrowseBooks;
