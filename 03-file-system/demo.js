const fs = require('fs');    //fs -> file system
const data = require('./data.json')

console.log(data);

console.log(data.name);

fs.readFile('./data.json','utf-8',(error,data) =>{  // by default is String not the Object 
    data = JSON.parse(data);   // Here we are converting the string into the Object
    console.log(data.name);
})   //readfile is a syncronous method so we are defining on ananomus funtion for callback