const EventEmitter = require('events')


// Event are the core building block of node
// May be we will not write our own event but lots of built in module uses the event
const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => { // here we are listening for the emit event
    console.log(`Data received ${name} with id : ${id}`)
})
customEmitter.on('response', () => { // here we are listening for the emit event
    console.log('Data Recieved 1')
})
customEmitter.on('response', () => { // here we are listening for the emit event
    console.log('Data Recieved 2')
})

customEmitter.emit('response','john', 34)   // here we are emiting the event  // string must be same
