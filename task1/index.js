const fs = require('fs');
const { stdin, stdout } = require('process');
const { pipeline } = require('stream');

const fileName = require('./fileName');
const coderStream = require('./coderStream');

const readStream = fileName('in') ? fs.createReadStream(fileName('in')) : stdin;
const writeStream = fileName('out')
  ? fs.createWriteStream(fileName('out'), { flags: 'a' })
  : stdout;

pipeline(readStream, coderStream, writeStream, err => {
  if (err) {
    console.error(err);
  }
  console.log('finished');
});
