// File modules
const { readFileSync, writeFileSync } = require('fs');

//readFile
//readFileSync
//writeFile
//writeFileSync

console.log('Start');
const first = readFileSync('./content/item/hello.txt', 'utf-8');
const second = readFileSync('./content/item/hi.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync(
    './content/item/resultSync.txt',
    `Hello this is some Text Written by WriteFileSync ${first} : ${second} `,
    { flag: 'a' }
);

console.log('Done with the task')
