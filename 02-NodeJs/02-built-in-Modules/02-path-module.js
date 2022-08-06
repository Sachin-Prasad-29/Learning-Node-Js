const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','item','hello.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content','items','hello.txt');
console.log(absolute);

//Explore more if you want