//this function returns an array of book categories
export const getBookCategories = (books) => {
    const categories = books.map(book => book.category);
    return [...new Set(categories)];
};
