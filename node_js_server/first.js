const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Js"); 
});

server.listen(8000, () => {
    console.log("Server Connected on port 8000");
});

server.on('error', (err) => {
    console.error("Server failed to start:", err.message);
});
