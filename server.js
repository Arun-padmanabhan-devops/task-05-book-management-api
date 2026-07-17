const express = require("express");
const path = require("path");
const books = require("./src/data/books.json");

const app = express();
const PORT = 3000;

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Static Files
app.use(express.static(path.join(__dirname, "src/public")));

// Home Page
app.get("/", (req, res) => {
    res.render("index", { books });
});

app.listen(PORT, () => {
    console.log(`🚀 Book Management System running at http://localhost:${PORT}`);
});