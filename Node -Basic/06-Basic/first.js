const {add,sub} = require('./add.js'); // It will import the add file here and It will execute it first
// require just excute the file
// here addFun contain the function that exported by the add.js

function greet(name) {
    console.log('Hello There ' + name + ' !');
}

greet('Sachin');
console.log(add(30, 40)); // It will not work because every module encapulated by default means any variable any function cannot be access by default
// Its just like excecute the add.js then remove it then excecute this file after that
// So How to use it ?

console.log(sub(50, 40));
