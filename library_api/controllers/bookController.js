const fs = require("fs");
const path = require("path");

const booksFilePath = path.join(__dirname, "../books.json");

// Helper function to read books from file
function readBooksFromFile() {
  try {
    const data = fs.readFileSync(booksFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading books file:", error);
    return [];
  }
}

// Helper function to write books to file
function writeBooksToFile(books) {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
}

// Get all books
exports.getAllBooks = (req, res) => {
  const books = readBooksFromFile();
  res.json(books);
};

// Get book by ID
exports.getBookById = (req, res) => {
  const books = readBooksFromFile();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const books = readBooksFromFile();
  const newBook = {
    id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
    title,
    author,
  };

  books.push(newBook);
  writeBooksToFile(books);
  res.status(201).json(newBook);
};

// Update a book
exports.updateBook = (req, res) => {
  const books = readBooksFromFile();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  writeBooksToFile(books);
  res.json({ message: "Book updated successfully", book });
};

// Delete a book
exports.deleteBook = (req, res) => {
  const books = readBooksFromFile();
  const updatedBooks = books.filter(
    (book) => book.id !== parseInt(req.params.id)
  );

  if (books.length === updatedBooks.length) {
    return res.status(404).json({ message: "Book not found" });
  }

  writeBooksToFile(updatedBooks);
  res.status(200).json({ message: "Book deleted successfully" });
};
