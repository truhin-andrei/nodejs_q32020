const argv = require('minimist')(process.argv.slice(2));
const { Transform } = require('stream');
const coder = require('./coder');

module.exports = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    this.push(
      coder(chunk.toString(), argv.s || argv.shift, argv.a || argv.action)
    );
    callback();
  }
});
