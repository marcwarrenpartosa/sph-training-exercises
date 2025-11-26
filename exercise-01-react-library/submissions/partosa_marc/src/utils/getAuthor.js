// this function gets the author of a book by authorId
const getAuthorById = (authorId, authors) => {
  return authors.find((author) => author.id === authorId);
};

export default getAuthorById;
