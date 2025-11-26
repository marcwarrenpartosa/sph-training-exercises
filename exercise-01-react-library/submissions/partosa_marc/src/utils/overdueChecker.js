//this function checks if a book is overdue
const isBookOverdue = (expectedReturnDate) => {
  const currentDate = new Date();
  const due = new Date(expectedReturnDate);
  return currentDate > due;
};


export default isBookOverdue;