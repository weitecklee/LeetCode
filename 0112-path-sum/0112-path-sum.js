/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let res = false;
  const recur = (node, sum) => {
    if (!node) {
      return;
    }
    sum += node.val;
    if (!node.left && !node.right && sum == targetSum) {
      res = true;
    }
    recur(node.left, sum);
    recur(node.right, sum);
  }
  recur(root, 0);
  return res;
};