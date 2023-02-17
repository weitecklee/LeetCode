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
 * @return {number}
 */
var minDiffInBST = function(root) {
  const nodes = [];
  const traverse = (node) => {
    if (!node) {
     return;
    }
    traverse(node.left);
    nodes.push(node.val);
    traverse(node.right);
  } 
  traverse(root);
  let minDiff = nodes[1] - nodes[0];
  for (let i = 1; i < nodes.length - 1; i++) {
    minDiff = Math.min(minDiff, nodes[i + 1] - nodes[i]);
  }
  return minDiff;
};