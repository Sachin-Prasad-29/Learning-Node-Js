const { createReadStream } = require('fs')

const stream = createReadStream('./bigfile.txt', { highWaterMark: 9000 })

// default 64kb
// last buffer - remainder
// HighWaterMark -- control size
//Const stream = createReadStream('./bigfile.txt',{highWaterMark: 9000})
//Const stream = createReadStream('./bigfile.txt',{encoding: 'utf-8}')

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (result) => {
    console.log(result)
})
