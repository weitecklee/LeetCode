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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const left = [];
  const right = []
  left.push(root.left);
  right.push(root.right);
  for (const node of left) {
    if (node) {
      left.push(node.left);
      left.push(node.right);
    }
  }
  for (const node of right) {
    if (node) {
      right.push(node.right);
      right.push(node.left);
    }
  }
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (!left[i] && !right[i]) {
      continue;
    }
    if ((left[i] && !right[i]) || (!left[i] && right[i]) || left[i].val !== right[i].val) {
      return false;
    }
  }
  return true;
    
};