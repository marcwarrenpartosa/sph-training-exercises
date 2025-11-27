
const Books = [
    {
        id: "BK-1",
        title: "Harry Potter and the Philosopher's Stone",
        category: "Fantasy",
        authorId: "AU-1", //J.K. Rowling
        image: "../assets/images/books/Harry-Potter-and-the-Philosopher's-Stone.jpg",
    },
    {
        id: "BK-2",
        title: "Harry Potter and the Chamber of Secrets",
        category: "Fantasy",
        authorId: "AU-1", //J.K. Rowling
        image: "../assets/images/books/Harry-Potter-and the-Chamber-of-Secret.jpg",
    },
    {
        id: "BK-3",
        title: "The Lord of the Rings",
        category: "Fantasy",
        authorId: "AU-2", //J.R.R. Tolkien
        image: "../assets/images/books/The-Lord-of-the-Rings.jpg",
    },
    {
        id: "BK-4",
        title: "The Hobbit",
        category: "Fantasy",
        authorId: "AU-2", //J.R.R. Tolkien
        image: "../assets/images/books/The-Hobbit.jpg",
    },
    {
        id: "BK-5",
        title: "And Then There Were None",
        category: "Mystery",
        authorId: "AU-3", //Agatha Christie
        image: "../assets/images/books/And-Then-There-Were-None.jpg",
    },
    {
        id: "BK-6",
        title: "Murder on the Orient Express",
        category: "Mystery",
        authorId: "AU-3", //Agatha Christie
        image: "../assets/images/books/Murder-on-the Orient-Express.jpg",
    },
    {
        id: "BK-7",
        title: "A Tale of Two Cities",
        category: "Historical Fiction",
        authorId: "AU-4", //Charles Dickens
        image: "../assets/images/books/A-Tale-of-Two-Cities.avif",
    },
    {
        id: "BK-8",
        title: "Great Expectations",
        category: "Classic Literature",
        authorId: "AU-4", //Charles Dickens
        image: "../assets/images/books/Great-Expectations.jpg",
    },
    {
        id: "BK-9",
        title: "Alice's Adventures in Wonderland",
        category: "Fantasy",
        authorId: "AU-5", //Lewis Carroll
        image: "../assets/images/books/Alice's-Adventures-in-Wonderland.jpg",
    },
    {
        id: "BK-10",
        title: "Through the Looking-Glass",
        category: "Fantasy",
        authorId: "AU-5", //Lewis Carroll
        image: "../assets/images/books/Through-the-Looking-Glass.jpeg",
    }
];

const Authors = [
    {
        id: "AU-1",
        name: "J.K. Rowling",
        image:"../assets/images/authors/JK-Rowling.png",
    },
    {
        id: "AU-2",
        name: "J.R.R. Tolkien",
        image: "../assets/images/authors/JRR-Tolkien.jpg",
    },
    {
        id: "AU-3",
        name: "Agatha Christie",
        image: "../assets/images/authors/Agatha-Christie.jpg",
    },
    {
        id: "AU-4",
        name: "Charles Dickens",
        image: "../assets/images/authors/Charles-Dickens.jpg",
    },
    {
        id: "AU-5",
        name: "Lewis Carroll",
        image: "../assets/images/authors/Lewis-Carroll.jpg",
    }
];


const Members = [
    {
        id: "MB-1",
        name: "Alice Johnson",
        membershipDate: "2020-01-15",
    },
    {
        id: "MB-2",
        name: "Bob Smith",
        membershipDate: "2019-03-22",
    },
    {
        id: "MB-3",
        name: "Charlie Brown",
        membershipDate: "2021-07-30",
    },
    {
        id: "MB-4",
        name: "Diana Martinez",
        membershipDate: "2022-02-10",
    },
    {
        id: "MB-5",
        name: "Ethan Williams",
        membershipDate: "2023-09-05",
    },
    {
        id: "MB-6",
        name: "Fiona Lee",
        membershipDate: "2020-11-19",
    },
    {
        id: "MB-7",
        name: "George Clark",
        membershipDate: "2024-01-02",
    }
];

const Transactions = [
    {
        id: "TR-1",
        bookId: "BK-1",        // Harry Potter and the Philosopher's Stone
        memberId: "MB-1",      // Alice Johnson
        borrowDate: "2024-01-10T09:15",
        expectedReturnDate: "2024-01-24T09:15",
        returnDate: "2024-01-20T14:30",
        status: "returned"
    },
    {
        id: "TR-2",
        bookId: "BK-3",        // The Lord of the Rings
        memberId: "MB-2",      // Bob Smith
        borrowDate: "2024-02-05T11:45",
        expectedReturnDate: "2024-02-19T11:45",
        returnDate: "2024-02-18T12:00",   // FIXED: Returned before MB-5 borrows
        status: "returned"
    },
    {
        id: "TR-3",
        bookId: "BK-7",        // A Tale of Two Cities
        memberId: "MB-3",      // Charlie Brown
        borrowDate: "2024-03-12T10:20",
        expectedReturnDate: "2024-03-26T10:20",
        returnDate: "2024-03-25T16:50",
        status: "returned"
    },
    {
        id: "TR-4",
        bookId: "BK-10",       // Through the Looking-Glass
        memberId: "MB-1",      // Alice Johnson
        borrowDate: "2024-04-01T13:10",
        expectedReturnDate: "2024-04-15T13:10",
        returnDate: "2024-04-14T12:00",   // FIXED: returned before MB-7
        status: "returned"
    },
    {
        id: "TR-5",
        bookId: "BK-5",        // And Then There Were None
        memberId: "MB-2",      // Bob Smith
        borrowDate: "2024-04-10T09:00",
        expectedReturnDate: "2024-04-24T09:00",
        returnDate: "2024-04-18T15:25",
        status: "returned"
    },
    {
        id: "TR-6",
        bookId: "BK-2",        // Harry Potter and the Chamber of Secrets
        memberId: "MB-3",      // Charlie Brown
        borrowDate: "2024-05-01T14:45",
        expectedReturnDate: "2024-05-15T14:45",
        returnDate: "2024-05-14T11:30",   // FIXED: returned before MB-6
        status: "returned"
    },
    {
        id: "TR-7",
        bookId: "BK-4",        // The Hobbit
        memberId: "MB-1",      // Alice Johnson
        borrowDate: "2024-05-12T10:05",
        expectedReturnDate: "2024-05-26T10:05",
        returnDate: "2024-05-30T17:40",
        status: "returned"
    },
    {
        id: "TR-8",
        bookId: "BK-8",        // Great Expectations
        memberId: "MB-3",      // Charlie Brown
        borrowDate: "2024-06-02T09:30",
        expectedReturnDate: "2024-06-16T09:30",
        returnDate: "2024-06-15T13:00",   // FIXED: Returned before MB-4 borrows in Nov
        status: "returned"
    },
    {
        id: "TR-9",
        bookId: "BK-6",        // Murder on the Orient Express
        memberId: "MB-2",      // Bob Smith
        borrowDate: "2024-06-15T11:10",
        expectedReturnDate: "2024-06-28T11:10",
        returnDate: "2024-06-28T14:55",
        status: "returned"
    },
    {
        id: "TR-10",
        bookId: "BK-9",        // Alice's Adventures in Wonderland
        memberId: "MB-1",      // Alice Johnson
        borrowDate: "2024-07-03T16:25",
        expectedReturnDate: "2024-07-17T16:25",
        returnDate: "2024-07-16T10:00",   // FIXED: returned before MB-5 borrows
        status: "returned"
    },

    {
        id: "TR-11",
        bookId: "BK-1",        // Harry Potter and the Philosopher's Stone
        memberId: "MB-4",      // Diana Martinez
        borrowDate: "2024-07-12T10:00",
        expectedReturnDate: "2024-07-26T10:00",
        returnDate: "2024-07-22T15:40",
        status: "returned"
    },
    {
        id: "TR-12",
        bookId: "BK-3",        // The Lord of the Rings
        memberId: "MB-5",      // Ethan Williams
        borrowDate: "2024-08-01T09:20",
        expectedReturnDate: "2024-08-15T09:20",
        returnDate: null,
        status: "borrowed"     // VALID — only borrower now
    },
    {
        id: "TR-13",
        bookId: "BK-6",        // Murder on the Orient Express
        memberId: "MB-4",      // Diana Martinez
        borrowDate: "2024-08-10T13:40",
        expectedReturnDate: "2024-08-24T13:40",
        returnDate: "2024-08-23T11:00",
        status: "returned"
    },
    {
        id: "TR-14",
        bookId: "BK-2",        // Harry Potter and the Chamber of Secrets
        memberId: "MB-6",      // Fiona Lee
        borrowDate: "2024-08-18T11:10",
        expectedReturnDate: "2024-09-01T11:10",
        returnDate: null,
        status: "borrowed"     // VALID — only current borrower
    },
    {
        id: "TR-15",
        bookId: "BK-7",        // A Tale of Two Cities
        memberId: "MB-5",      // Ethan Williams
        borrowDate: "2024-09-05T15:30",
        expectedReturnDate: "2024-09-19T15:30",
        returnDate: "2024-09-18T14:15",
        status: "returned"
    },
    {
        id: "TR-16",
        bookId: "BK-10",       // Through the Looking-Glass
        memberId: "MB-7",      // George Clark
        borrowDate: "2024-09-20T10:50",
        expectedReturnDate: "2024-10-04T10:50",
        returnDate: null,
        status: "borrowed"     // VALID — only current borrower
    },
    {
        id: "TR-17",
        bookId: "BK-4",        // The Hobbit
        memberId: "MB-6",      // Fiona Lee
        borrowDate: "2024-10-01T09:00",
        expectedReturnDate: "2024-10-15T09:00",
        returnDate: "2024-10-12T13:20",
        status: "returned"
    },
    {
        id: "TR-18",
        bookId: "BK-5",        // And Then There Were None
        memberId: "MB-7",      // George Clark
        borrowDate: "2024-10-18T14:25",
        expectedReturnDate: "2024-11-01T14:25",
        returnDate: null,
        status: "borrowed"     // VALID — only borrower
    },
    {
        id: "TR-19",
        bookId: "BK-8",        // Great Expectations
        memberId: "MB-4",      // Diana Martinez
        borrowDate: "2024-11-03T10:15",
        expectedReturnDate: "2024-11-17T10:15",
        returnDate: "2024-11-16T16:40",
        status: "returned"
    },
    {
        id: "TR-20",
        bookId: "BK-9",        // Alice's Adventures in Wonderland
        memberId: "MB-5",      // Ethan Williams
        borrowDate: "2024-11-20T09:30",
        expectedReturnDate: "2024-12-04T09:30",
        returnDate: null,
        status: "borrowed"     // VALID — only borrower
    }
];



export default { Books, Authors, Members, Transactions };