/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const basket = new Map();
  let res = 0;
  let i = 0;
  for (let j = 0; j < fruits.length; j++) {
    if (!basket.has(fruits[j])) {
      basket.set(fruits[j], 0);
    }
    basket.set(fruits[j], basket.get(fruits[j]) + 1);
    while (basket.size > 2) {
      basket.set(fruits[i], basket.get(fruits[i]) - 1);
      if (basket.get(fruits[i]) === 0) {
        basket.delete(fruits[i]);
      }
      i++;
    }
    res = Math.max(res, j - i + 1);
  }
  return res;
  
    
};