// CommonJs , every file is module (by Default)
// Modules - Encapsulated code (only Share Minimum)

// const names = require('./02-names');
const { name1, name2 } = require('./03-names');
const sayHi = require('./04-utils');
const item = require('./05-alternative-flav');
require('./06-mind-granade');  // It will execute the 06-mind-granade file

// console.log(names);dfdsfsdfsdfsdfsdfsdfdf
console.log(item);
sayHi(name1);
sayHi('Sameer');
sayHi(name2);
