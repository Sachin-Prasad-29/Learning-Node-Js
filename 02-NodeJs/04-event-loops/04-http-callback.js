const http = require('http')
const server = http.createServer((req, res) => {
    console.log('request event')    // this callback is for the every time the we refresh the page
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000.....') // This callback is only for the settingup the server
})
