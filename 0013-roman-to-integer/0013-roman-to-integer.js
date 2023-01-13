/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dic = new Map();
  dic.set('CM', 900);
  dic.set('M', 1000);
  dic.set('CD', 400);
  dic.set('D', 500);
  dic.set('XC', 90);
  dic.set('C', 100);
  dic.set('XL', 40);
  dic.set('L', 50);
  dic.set('IX', 9);
  dic.set('X', 10);
  dic.set('IV', 4);
  dic.set('V', 5);
  dic.set('I', 1);
  let num = 0;
  for (const [r, n] of dic) {
    while (s.includes(r)) {
      s = s.replace(r, '');
      num += n;
    }
  }
  return num;
};