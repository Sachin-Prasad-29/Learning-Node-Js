const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./bigfile.txt', 'utf-8') // In this case the whole data of file get transfored to the brower
    // res.end(text)

    const fileStream = fs.createReadStream('./bigfile.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res) //pipe() pushes chunks from readStream to writeStream in chunks 
        //not whole data at a time
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)


// So the conculsion IS that instead Of sending the whole file at a time 
// We are sending it into small chunks 