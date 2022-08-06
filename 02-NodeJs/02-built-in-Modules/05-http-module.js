const http = require('http'); //built in module

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home Page');
    }
    if (req.url === '/about') {
        res.end('This is about page');
    }
    res.end(`
    <h1> Oops ! </h1>
    <p> Page not found </p>
    <a href="/" >Home Page</a>
    `);
});

server.listen(5000);
