import fetchAuthors from "../services/authors.js";

// this function gets the author of a book by authorId
const getAuthor = (authorId) => {
  const authors = fetchAuthors();
  return authors.find((author) => author.id === authorId);
};

export default getAuthor;
