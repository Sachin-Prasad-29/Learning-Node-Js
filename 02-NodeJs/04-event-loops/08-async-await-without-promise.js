const { readFile, writeFile } = require('fs').promises


// If we want to perform more than one operation like two readfile operation and one write file operation then what will
// be our approach ??? then in that case we will use promise

// We can use async await without making out own promise 

const start = async () => {
    try {
        const first = await readFile('./content/item/hello.txt', 'utf-8')
        const second = await readFile('./content/item/hi.txt', 'utf-8')
        await writeFile('./content/item/resultSync.txt', `THIS IS SOME TEXT ${first} ${second} `, { flag: 'a' })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()
