const { bookStore } = require('../model/booksStore')


exports.getBooks = (req, res) => {
    res.send(bookStore);
}

exports.getBookById = (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: 'id must be of type number' })
    }
    console.log("id", id)
    const book = bookStore.find((e) => e.id === id)
    if (!book) {
        res.status(404).send('Book not found')
    }
    res.status(200).json(book);
}

exports.addNewBook = (req, res) => {
    let bookDetails = req.body;
    if (bookDetails.id && bookDetails.name && bookDetails.author) {
        const isExist = bookStore.some((book) => book.id === bookDetails.id);
        if (isExist) {
            return res.send('book is already present');
        }
        bookStore.push(bookDetails);
        res.send('Book added successfully');
    } else {
        res.send('Book details is missing, please check...');
    }
}

exports.deleteBookById = (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: 'id must be of type number' })
    }
    console.log("id", id)
    const indexToDelete = bookStore.findIndex((e) => e.id === id)
    if (indexToDelete < 0) {
        res.status(404).json({ error: `Book with  id ${id} does not exists!` })
    }
    bookStore.splice(indexToDelete, 1)
    return res.status(200).json({ message: 'book deleted' })
}