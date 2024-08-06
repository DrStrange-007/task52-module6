const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

let users = [];
let books = [];

// Root URL route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Hub API');
});

// User endpoints
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).send(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((u) => u.id === parseInt(id));
  if (user) {
    user.name = name;
    user.email = email;
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== parseInt(id));
  res.status(204).send();
});

app.get('/api/users', (req, res) => {
  const { query } = req.query;
  const results = users.filter((u) => u.name.includes(query) || u.email.includes(query));
  res.send(results);
});

// Book endpoints
app.post('/api/books', (req, res) => {
  const { title, author, isbn } = req.body;
  const newBook = { id: books.length + 1, title, author, isbn };
  books.push(newBook);
  res.status(201).send(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, isbn } = req.body;
  const book = books.find((b) => b.id === parseInt(id));
  if (book) {
    book.title = title;
    book.author = author;
    book.isbn = isbn;
    res.send(book);
  } else {
    res.status(404).send('Book not found');
  }
});

app.delete('/api/books/:id', (req, res) => {
  const { id } = req.params;
  books = books.filter((b) => b.id !== parseInt(id));
  res.status(204).send();
});

app.get('/api/books', (req, res) => {
  const { query } = req.query;
  const results = books.filter((b) => b.title.includes(query) || b.author.includes(query) || b.isbn.includes(query));
  res.send(results);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
