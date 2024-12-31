# Library API: A RESTful API Example

This project demonstrates a **RESTful API** implementation for managing a library of books. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on book records. The project is built using **Node.js**, **Express.js**, and a JSON file as the data source.

---

## What is a RESTful API?

A **RESTful API** (Representational State Transfer Application Programming Interface) is an architectural style that uses standard HTTP methods to interact with resources. It is stateless, scalable, and based on principles such as:

1. **Client-Server**: Separation of client (frontend) and server (backend).
2. **Statelessness**: Each request from the client contains all the information needed for the server to process it.
3. **Resource Identification**: Resources are identified using URLs.
4. **Uniform Interface**: Standard HTTP methods are used to interact with resources:
   - `GET`: Retrieve resources.
   - `POST`: Create new resources.
   - `PUT`: Update existing resources.
   - `DELETE`: Delete resources.

---

## How This Project Demonstrates RESTful API Principles

### 1. **Resource Identification**

- The resource in this API is `books`.
- Each book is identified by a unique `id`.

### 2. **HTTP Methods**

- `GET /books`: Retrieves all books.
- `GET /books/:id`: Retrieves a specific book by ID.
- `POST /books`: Adds a new book.
- `PUT /books/:id`: Updates a book by ID.
- `DELETE /books/:id`: Deletes a book by ID.

### 3. **Statelessness**

- Each request contains all the data needed to process it (e.g., `id` in the URL for specific books, request body for new book details).

### 4. **JSON Data Format**

- Data is exchanged in JSON format, which is lightweight and widely supported.

---

## API Endpoints

### 1. **Get All Books**

- **Endpoint:** `GET /books`
- **Description:** Fetches all books from the library.
- **Example Response:**
  ```json
  [
    { "id": 1, "title": "The Alchemist", "author": "Paulo Coelho" },
    { "id": 2, "title": "Malgudi Days", "author": "RK Narayanan" }
  ]
  ```

### 2. **Get a Book by ID**

- **Endpoint:** `GET /books/:id`
- **Description:** Fetches a specific book by its `id`.
- **Example Response:**
  ```json
  { "id": 1, "title": "The Alchemist", "author": "Paulo Coelho" }
  ```

### 3. **Add a New Book**

- **Endpoint:** `POST /books`
- **Description:** Adds a new book to the library.
- **Request Body:**
  ```json
  {
    "title": "New Book Title",
    "author": "New Author"
  }
  ```
- **Example Response:**
  ```json
  {
    "id": 4,
    "title": "New Book Title",
    "author": "New Author"
  }
  ```

### 4. **Update a Book**

- **Endpoint:** `PUT /books/:id`
- **Description:** Updates the details of an existing book.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author"
  }
  ```
- **Example Response:**
  ```json
  {
    "message": "Book updated successfully",
    "book": { "id": 1, "title": "Updated Title", "author": "Updated Author" }
  }
  ```

### 5. **Delete a Book**

- **Endpoint:** `DELETE /books/:id`
- **Description:** Deletes a book from the library.
- **Example Response:**
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

## Frontend Demonstration

The `public/` folder contains HTML pages to interact with the API:

1. **`add_book.html`**: Form to add a new book.
2. **`delete_book.html`**: Form to delete a book by ID.
3. **`update_book.html`**: Form to update book details by ID.
4. **`book.html`**: Displays all books in a table.
