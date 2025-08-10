let books = [
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" },
];

exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
};

exports.addBook = (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Title and Author are required" });
    }
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ error: "Book not found" });

    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Title and Author are required" });
    }

    book.title = title;
    book.author = author;
    res.json(book);
};

exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Book not found" });

    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
};
