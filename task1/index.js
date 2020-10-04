const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const { stdin, stdout } = require('process');
const { pipeline } = require('stream');

const fileName = require('./fileName');
const coder = require('./coder');

console.log(11, coder('Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!', 7, 'decode'));

const readStream = fileName('in') ? fs.createReadStream(fileName('in')) : stdin;
const writeStream = fileName('out')
  ? fs.createWriteStream(fileName('out'))
  : stdout;

pipeline(readStream, writeStream, err => {
  if (err) {
    console.log(err);
  }
  console.log('finished');
});

console.log(1, argv);
console.log(2, fileName('in'));
console.log(3, fileName('out'));
