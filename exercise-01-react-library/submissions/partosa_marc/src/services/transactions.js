import Data from "../db/data.js"

//fetches all the borrow and return history of all books
export default function fetchTransactions() {
    return Data.Transactions;
}