const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

module.exports = key => {
  let input = argv.i || argv.input;
  let output = argv.o || argv.output;
  if (key === 'in' && input && input !== true) {
    input = input.toString();
    fs.lstat(input, (err, stats) => {
      if (err) {
        return console.error(err.code);
      }
      if (stats.isDirectory()) {
        process.stderr.write('Caught Exception. Input file error', () => {
          process.exitCode = 1;
          throw `${input} is directory`;
        });
      }
      return;
    });

    fs.access(input, fs.constants.F_OK, err => {
      if (err) {
        process.stderr.write('Caught Exception. Input file error.', () => {
          process.exitCode = 1;
          throw `Input file ${input} does not exist`;
        });
        return;
      }
    });

    fs.access(input, fs.constants.R_OK, err => {
      if (err) {
        process.stderr.write('Caught Exception. Input file error.', () => {
          process.exitCode = 1;
          throw `Input file ${input} is not readable`;
        });
      }
      return;
    });
    return input;
  }

  if (key === 'out' && output && output !== true) {
    output = output.toString();
    fs.lstat(output, (err, stats) => {
      if (err) {
        return console.error(err.code);
      }
      if (stats.isDirectory()) {
        process.stderr.write('Caught Exception. Output file error.', () => {
          process.exitCode = 1;
          throw `${output} is directory`;
        });
        return;
      }
    });

    fs.access(output, fs.constants.F_OK, err => {
      if (err) {
        process.stderr.write('Caught Exception. Output file error.', () => {
          process.exitCode = 1;
          throw `output file ${output} does not exist`;
        });
      }
    });

    fs.access(output, fs.constants.W_OK, err => {
      if (err) {
        process.stderr.write('Caught Exception. Output file error.', () => {
          process.exitCode = 1;
          throw `output file ${output} is not writable`;
        });
      }
    });
    return output;
  }
  return false;
};
