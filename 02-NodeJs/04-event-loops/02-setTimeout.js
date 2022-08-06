//Starting Operating System process

console.log('first ');

setTimeout(() => {
    console.log('Second');   // set time out is async so the console.log() get offloaded doesnt matter the time is 0
}, 0); 

console.log('Third');

//Completed and exited operating system process

