# Show all books with authors
SELECT b.id as book_id, b.title as title, a.id as author_id, a.name as author_name from Books b inner join Authors a on b.author_id = a.id;

# Show all currently borrowed books(not returned)
SELECT b.id as book_id, b.title as title, br.date_borrowed from Books b inner join Borrow_records br on b.id = br.book_id where br.date_returned is NULL;

#List members who borrowed from a specific author.
SELECT br.book_id as book_id, b.title as title, br.date_borrowed as date_borrowed, m.id as borrower_id,  m.name as borrower, b.author_id as author_id from borrow_records br inner join books b on br.book_id = b.id inner join Members m on br.member_id = m.id where b.author_id = 1;

#Count books per author
SELECT a.id as author_id, a.name as name,  COUNT(b.id) AS total_books from Authors a left join Books b on b.author_id = a.id group by a.id, a.name;

#Borrowing history for a specific member.
SELECT * from borrow_records where member_id = 1;