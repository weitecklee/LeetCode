/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  stockPrices.sort((a, b) => a[0] - b[0]);
  let ans = 0;
  let numer = '';
  let denom = '';
  const gcd = (a, b) => {
    if (b > a) {
      [a, b] = [b, a];
    }
    while (a > 0) {
      const tmp = a;
      a = b % a;
      b = tmp;
    }
    return b;
  }
  for (let i = 1; i < stockPrices.length; i++) {
    let currnum = stockPrices[i][1] - stockPrices[i - 1][1];
    let currden = stockPrices[i][0] - stockPrices[i - 1][0];
    const g = gcd(currnum, currden);
    currnum /= g;
    currden /= g;
    if (currnum != numer || currden != denom) {
      ans++;
    }
    numer = currnum;
    denom = currden;
  }
  return ans;
    
};