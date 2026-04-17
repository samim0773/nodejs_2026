const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());

let books = [
    {
        id: 1,
        name: 'Java',
        author: 'Jon'
    },
    {
        id: 2,
        name: 'Python',
        author: 'Richard'
    }
];

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: 'id must be of type number' })
    }
    console.log("id", id)
    const book = books.find((e) => e.id === id)
    if (!book) {
        res.status(404).send('Book not found')
    }
    res.status(200).json(book);
});

app.post('/add-book', (req, res) => {
    let bookDetails = req.body;
    if (bookDetails.id && bookDetails.name && bookDetails.author) {
        const isExist = books.some((book) => book.id === bookDetails.id);
        if (isExist) {
            return res.send('book is already present');
        }
        books.push(bookDetails);
        res.send('Book added successfully');
    } else {
        res.send('Book details is missing, please check...');
    }
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: 'id must be of type number' })
    }
    console.log("id", id)
    const indexToDelete = books.findIndex((e) => e.id === id)
    if (indexToDelete < 0) {
        res.status(404).json({ error: `Book with  id ${id} does not exists!` })
    }
    books.splice(indexToDelete, 1)
    return res.status(200).json({ message: 'book deleted' })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});