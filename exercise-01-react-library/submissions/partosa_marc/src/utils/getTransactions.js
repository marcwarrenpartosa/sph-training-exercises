// Filter transactions to get only borrowed books (status: "borrowed" and returnDate: null)
export const getBorrowedTransactions = (transactions) => {
  return transactions.filter(
    (transaction) =>
      transaction.status === "borrowed" && !transaction.returnDate
  );
};
