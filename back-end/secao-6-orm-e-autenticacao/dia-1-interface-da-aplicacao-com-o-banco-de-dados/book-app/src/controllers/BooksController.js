const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
    try {
      const books = await BooksService.getAll();
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await BooksService.getById(id);
  
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      return res.status(200).json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  const createBook = async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const newBook = await BooksService.createBook({ title, author, pageQuantity });
  
      return res.status(201).json(newBook);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Something went wrong'});
    }
  };
  
  module.exports = {
    getAll,
    getById,
    createBook,
  };