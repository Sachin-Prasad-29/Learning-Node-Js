fs = require('fs');

const phoneNumber = (err,data) => {  // this is callback function 
    console.log('data:',data);
}

fs.readdir('c:/',phoneNumber);
console.log("this comes after");