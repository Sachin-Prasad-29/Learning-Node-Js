const fs = require('fs');

const readline = require('readline');



const writeGreetingToFile =(name) => {

fs.writeFile('greeting.txt',`Hello ${name} !`, error =>{
    if(error)
         console.log('Error occured when writing to file')
});   
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ?",(name)=>{
    rl.close();
    writeGreetingToFile(name);
});
