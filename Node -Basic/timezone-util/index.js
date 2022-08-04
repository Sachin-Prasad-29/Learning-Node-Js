const moment = require('moment-timezone');

moment.tz.setDefault('India/Mumbai');

// console.log(process.argv);  // process.argv used to read the argument passed
let targetTimeZone ;

if(process.argv.length != 3){
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}else{
    targetTimeZone = process.argv[2];
}

console.log(`The Time zone at ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);
