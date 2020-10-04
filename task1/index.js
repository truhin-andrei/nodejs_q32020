const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

const fileName = require('./fileName');




// const readStream = fs.createReadStream(parseArgs.i);
console.log(1, argv);
console.log(2, fileName('in'));
console.log(3, fileName('out'));
