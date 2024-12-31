const express = require("express");
const path = require("path");

const app = express();
const booksRoutes = require("./routes/book");

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Mount the routes
app.use("/books", booksRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
