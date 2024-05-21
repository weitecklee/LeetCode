/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const arr = [nums[0]];

    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left;  // Return the insertion point
    };

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
        } else {
            const idx = binarySearch(arr, nums[i]);
            arr[idx] = nums[i];  // Replace the element at the found index
        }
    }
    return arr.length;
};