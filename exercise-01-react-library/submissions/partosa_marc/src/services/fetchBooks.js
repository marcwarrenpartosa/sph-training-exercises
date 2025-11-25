import Data from "../db/data.js"

//fetches all books in the database
export default function fetchBooks() {
    return Data.Books;
}