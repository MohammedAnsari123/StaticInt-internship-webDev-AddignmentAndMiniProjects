const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const bookController = require("./controllers/bookController");

app.get("/books", bookController.getAllBooks);
app.get("/books/:id", bookController.getBookById);
app.post("/books", bookController.addBook);
app.put("/books/:id", bookController.updateBook);
app.delete("/books/:id", bookController.deleteBook);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
