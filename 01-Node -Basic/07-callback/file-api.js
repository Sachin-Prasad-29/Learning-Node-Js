let fs = require('fs');

// fs.writeFileSync('out.txt','This is some text');  //this operation performed syncrours
// console.log('This should print after previoud life')

fs.writeFile('out.txt', 'This should be wrtten async', (err) => {
  console.log('This should print after previous line')
})

console.log("this should print after previous line");
