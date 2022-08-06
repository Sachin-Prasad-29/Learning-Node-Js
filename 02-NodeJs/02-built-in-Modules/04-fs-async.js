// readFile
// writeFile

const { readFile, writeFile } = require('fs');

console.log('Start')
readFile('./content/item/hello.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/item/hi.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = result;
        console.log(second);
        writeFile(
            './content/item/resultSync.txt',
            `Hello this is some Text Written by WriteFileSync ${first} : ${second} `,
            (error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log('Done with this task');
            }
        );
    });
});

console.log("Starting the next Task");