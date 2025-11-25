
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
]

const Transactions = [
    {
        id: "TR-1",
        bookId: "BK-1",                    // Harry Potter 1
        memberId: "MB-1",                  // Borrowed by Alice Johnson
        borrowDate: "2024-01-10T09:15",
        returnDate: "2024-01-20T14:30",
        status: "returned"
    },
    {
        id: "TR-2",
        bookId: "BK-3",                    // The Lord of the Rings
        memberId: "MB-2",                  // Borrowed by Bob Smith
        borrowDate: "2024-02-05T11:45",
        returnDate: null,                  // Still borrowed
        status: "borrowed"
    },
    {
        id: "TR-3",
        bookId: "BK-7",                    // A Tale of Two Cities
        memberId: "MB-3",                  // Borrowed by Charlie Brown
        borrowDate: "2024-03:12T10:20",
        returnDate: "2024-03-25T16:50",
        status: "returned"
    },
    {
        id: "TR-4",
        bookId: "BK-10",                   // Through the Looking-Glass
        memberId: "MB-1",                  // Borrowed by Alice Johnson
        borrowDate: "2024-04-01T13:10",
        returnDate: null,
        status: "borrowed"
    },
    {
        id: "TR-5",
        bookId: "BK-5",                    // And Then There Were None
        memberId: "MB-2",                  // Borrowed by Bob Smith
        borrowDate: "2024-04-10T09:00",
        returnDate: "2024-04-18T15:25",
        status: "returned"
    },
    {
        id: "TR-6",
        bookId: "BK-2",                    // Harry Potter 2
        memberId: "MB-3",                  // Borrowed by Charlie Brown
        borrowDate: "2024-05-01T14:45",
        returnDate: null,
        status: "borrowed"
    },
    {
        id: "TR-7",
        bookId: "BK-4",                    // The Hobbit
        memberId: "MB-1",                  // Borrowed by Alice Johnson
        borrowDate: "2024-05-12T10:05",
        returnDate: "2024-05-30T17:40",
        status: "returned"
    },
    {
        id: "TR-8",
        bookId: "BK-8",                    // Great Expectations
        memberId: "MB-3",                  // Borrowed by Charlie Brown
        borrowDate: "2024-06-02T09:30",
        returnDate: null,
        status: "borrowed"
    },
    {
        id: "TR-9",
        bookId: "BK-6",                    // Murder on the Orient Express
        memberId: "MB-2",                  // Borrowed by Bob Smith
        borrowDate: "2024-06-15T11:10",
        returnDate: "2024-06-28T14:55",
        status: "returned"
    },
    {
        id: "TR-10",
        bookId: "BK-9",                    // Alice's Adventures in Wonderland
        memberId: "MB-1",                  // Borrowed by Alice Johnson
        borrowDate: "2024-07-03T16:25",
        returnDate: null,
        status: "borrowed"
    }
];


export default { Books, Authors, Members, Transactions };