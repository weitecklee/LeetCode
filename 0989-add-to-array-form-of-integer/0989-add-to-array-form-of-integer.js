/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  const numK = k.toString().split('').map(Number);
  let i = num.length - 1;
  let j = numK.length - 1;
  const res = [];
  let tmp = 0;
  while (i >= 0 && j >= 0) {
    const curr = num[i] + numK[j] + tmp;
    if (curr >= 10) {
      tmp = 1;
      res.push(curr - 10);
    } else {
      tmp = 0;
      res.push(curr);
    }
    i--;
    j--;
  }
  while (i >= 0) {
    const curr = num[i] + tmp;
    if (curr >= 10) {
      tmp = 1;
      res.push(curr - 10);
    } else {
      tmp = 0;
      res.push(curr);
    }
    i--;
  }
  while (j >= 0) {
    const curr = numK[j] + tmp;
    if (curr >= 10) {
      tmp = 1;
      res.push(curr - 10);
    } else {
      tmp = 0;
      res.push(curr);
    }
    j--;
  }
  if (tmp > 0) {
    res.push(tmp);
  }
  return res.reverse();
};