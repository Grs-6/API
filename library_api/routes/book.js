const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookController");

// Routes
router.get("/", booksController.getAllBooks); // Get all books
router.get("/:id", booksController.getBookById); // Get a book by ID
router.post("/", booksController.addBook); // Add a new book
router.put("/:id", booksController.updateBook); // Update a book
router.delete("/:id", booksController.deleteBook); // Delete a book

module.exports = router;
