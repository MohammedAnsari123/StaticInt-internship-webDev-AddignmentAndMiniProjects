const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});
app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

app.get("/user/:id", async (req, res, next) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.get("/search", (req, res) => {
  res.json({ query: req.query });
});

const router = express.Router();
router.use((req, res, next) => {
  console.log("Router-level middleware");
  next();
});
router.get("/status", (req, res) => res.json({ status: "ok" }));
app.use("/api", router);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
