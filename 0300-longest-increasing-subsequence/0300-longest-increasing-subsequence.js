/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const arr = [];
  const binarySearch = (k) => {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === k) {
        return mid;
      }
      if (arr[mid] < k) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return lo;
  }
  for (const n of nums) {
    const i = binarySearch(n);
    if (i >= arr.length) {
      arr.push(n);
    } else {
      arr[i] = n;
    }
  }
  return arr.length;
};