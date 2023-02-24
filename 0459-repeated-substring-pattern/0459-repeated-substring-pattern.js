/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  
  for (let i = 0; i < s.length / 2; i++) {
    if (s.length % (i + 1)) {
      continue;
    }
    const substr = s.slice(0, i + 1);
    const re = new RegExp('^(' + substr + ')\\1+$');
    if (re.test(s)) {
      return true;
    }
    
  }
  return false;
    
};