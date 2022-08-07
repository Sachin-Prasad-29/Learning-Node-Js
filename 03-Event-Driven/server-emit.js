// Our server have ability to listen for the request event
// Many built in module relay on Events
const http = require('http')

// const server = http.createServer((req,res) => {
//   res.end('Welcome');
// })

//Using Event Emitter API
const server = http.createServer()

//Emit request event
//Subscribe to it /listen for it ./respond to it
server.on('request', (req,res) => {
  res.end('Welcome')
})

server.listen(5000)