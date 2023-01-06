const express = require('express');

const Book = require('./controllers/BooksController');

const app = express();

app.use(express.json());

app.post('/books', Book.createBook);

app.get('/books', Book.getAll);

app.get('/books/:id', Book.getById);


module.exports = app;