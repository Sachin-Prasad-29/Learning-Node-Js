const { readFile } = require('fs')

// If we want to more than one operation like two readfile operation and one write file operation then what will
// be our approach ??? then in that case we will use promise

// Promise(resolve,reject ) it is a promise constructor

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('../content/item/hello.txt')
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
