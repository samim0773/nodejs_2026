const express = require('express');

const { logger } = require("./middleware/logger")

const bookRoute = require('./router/book.routes')

const app = express();
const PORT = 8000;


app.use(express.json());
app.use(logger);

app.use('/books', bookRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});