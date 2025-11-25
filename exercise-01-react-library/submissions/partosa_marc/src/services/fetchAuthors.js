import Data from "../db/data.js"

//fetches all authors in the database
export default function fetchAuthors() {
    return Data.Authors;
}