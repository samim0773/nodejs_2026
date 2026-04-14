const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('server is running ');
    res.writeHead(200);
    res.end('Thanks for visiting my server')

});

server.listen(8000, () => {
    console.log('Servier is running on port 8000')
});