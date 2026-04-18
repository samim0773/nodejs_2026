const express = require('express');
const router = express.Router();
const { getBooks, getBookById, addNewBook, deleteBookById } = require('../controller/books.controller')

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/add', addNewBook);
router.delete('/:id', deleteBookById);


module.exports = router;