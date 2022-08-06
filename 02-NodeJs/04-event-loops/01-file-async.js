const { readFile } = require('fs');
console.log('started a first Task');

readFile('./content/item/hello.txt', 'utf-8', (err, result) => {  //readFile is async and it offload the Callback function
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first Task');
});

console.log('Starting the first Task');



