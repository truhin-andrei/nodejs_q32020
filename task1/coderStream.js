const argv = require('minimist')(process.argv.slice(2));
const { Transform } = require('stream');
const coder = require('./coder');

if (!(argv.s || argv.shift) || !(argv.a || argv.action)) {
  process.stderr.write('Caught Exception. No enough parameters.', () => {
    process.exitCode = 1;
    throw 'Shift and action is requiered';
  });
}

if (typeof (argv.s || argv.shift) !== 'number') {
  process.stderr.write('Caught Exception. Shift is not a number.', () => {
    process.exitCode = 1;
    throw 'Shift should be a number';
  });
}

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
