/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ans = [];
  for (let i = 1; i < 4 && i < s.length; i++) {
    for (let j = i + 1; j < i + 4 && j < s.length; j++) {
      for (let k = j + 1; k < j + 4 && k < s.length; k++) {
        let address = [s.slice(0, i), s.slice(i, j), s.slice(j, k), s.slice(k)];
        if (address.every(a => Number(a) < 256 && (a.length === 1 || a[0] !== '0'))) {
          ans.push(address.join('.'));
        }
      }
    }
  }
  return ans;
};