/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.padStart(b.length, '0');
  b = b.padStart(a.length, '0');
  let tmp = 0;
  let res = '';
  for (let i = a.length - 1; i >= 0; i--) {
    const curr = tmp + (a[i] === '1') + (b[i] === '1');
    if (curr === 3) {
      tmp = 1;
      res = '1' + res;
    } else if (curr === 2) {
      tmp = 1;
      res = '0' + res;
    } else if (curr === 1) {
      tmp = 0;
      res = '1' + res;
    } else {
      tmp = 0;
      res = '0' + res;
    }
  }
  return (tmp ? '1' : '') + res
};