const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Home page')
});

app.get('/about', (req, res) => {
    res.end('About Page')
});

app.post('/create-post', (req, res) => {
    res.status(201).end('Post successfully..')
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})