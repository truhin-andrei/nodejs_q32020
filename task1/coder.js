const position_a = 97;
const position_z = 122;
const position_A = 65;
const position_Z = 90;

module.exports = function coder(str, shift, direction) {
  const shiftDirection = direction === 'encode' ? 1 : -1;
  const result = str.replace(/[a-zA-Z]/g, match => {
    let resultCode = match.codePointAt(0) + shift * shiftDirection;
    if (
      match.codePointAt(0) >= position_A &&
      match.codePointAt(0) <= position_Z &&
      resultCode > position_Z
    ) {
      resultCode = position_A + (resultCode - position_Z - 1);
    }
    if (
      match.codePointAt(0) >= position_A &&
      match.codePointAt(0) <= position_Z &&
      resultCode < position_A
    ) {
      resultCode = position_Z - (position_A - resultCode - 1);
    }
    if (
      match.codePointAt(0) >= position_a &&
      match.codePointAt(0) <= position_z &&
      resultCode > position_z
    ) {
      resultCode = position_a + (resultCode - position_z - 1);
    }
    if (
      match.codePointAt(0) >= position_a &&
      match.codePointAt(0) <= position_z &&
      resultCode < position_a
    ) {
      resultCode = position_z - (position_a - resultCode - 1);
    }
    return String.fromCodePoint(resultCode);
  });

  return result;
};