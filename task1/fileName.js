const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

module.exports = key => {
  const input = (argv.i || argv.input).toString();
  const output = (argv.o || argv.output).toString();
  if (key === 'in' && input) {
    fs.lstat(input, (err, stats) => {
      if (err) {
        return console.log(err);
      }
      if (stats.isDirectory()) throw `${input} is directory`;
    });

    fs.access(input, fs.constants.F_OK, err => {
      if (err) throw `Input file ${input} does not exist`;
    });

    fs.access(input, fs.constants.R_OK, err => {
      if (err) throw `Input file ${input} is not readable`;
    });
    return input;
  }

  if (key === 'out' && output) {
    fs.lstat(output, (err, stats) => {
      if (err) {
        return console.log(err);
      }
      if (stats.isDirectory()) throw `${output} is directory`;
    });

    fs.access(output, fs.constants.F_OK, err => {
      if (err) throw `output file ${output} does not exist`;
    });

    fs.access(output, fs.constants.W_OK, err => {
      if (err) throw `output file ${output} is not writable`;
    });
    return output;
  }
  return false;
};