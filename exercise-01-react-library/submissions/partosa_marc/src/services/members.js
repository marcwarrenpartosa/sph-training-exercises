import Data from "../db/data.js"

//fetches all members in the database
export default function fetchMembers() {
    return Data.Members;
}