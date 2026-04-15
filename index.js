const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('incomming request...');

    switch (req.url) {
        case '/':
            res.writeHead(200)
            return res.end('Home page')
        case '/about':
            res.writeHead(200)
            return res.end('I am a software engineer')
        case '/contact-us':
            res.writeHead(200);
            return res.end('Connect me at: samim@test.com')
        default:
            res.writeHead(404)
            return res.end('not found.....')
    }

});

server.listen(8000, () => {
    console.log('Servier is running on port 8000')
});