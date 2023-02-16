/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let res = 0;
  for (const num of nums) {
    if ((Math.floor(Math.log10(num))) % 2) {
      res++;
    }
  }
  return res;
};