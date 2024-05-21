/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
        } else {
            const idx = arr.findIndex((a) => a > nums[i]);
            if (idx === 0) {
                arr[0] = nums[i];
            } else if (idx > 0 && arr[idx - 1] < nums[i]) {
                arr[idx] = nums[i]; 
            }
        }
    }
    return arr.length;
};