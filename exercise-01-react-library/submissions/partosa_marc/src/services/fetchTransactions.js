import Data from "../db/data.js"

//fetches all the borrow and return history of all books
export default function fetchTransactions() {
    return Data.Transactions;
}


//fetches all the borrow and return history of a member
export function fetchMemberTransactions(memberId) {
    return Data.Transactions.filter(transaction => transaction.memberId === memberId);
}