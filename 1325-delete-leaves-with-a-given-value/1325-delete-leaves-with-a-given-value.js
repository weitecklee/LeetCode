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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    const recur = (node) => {
      if (node.left && recur(node.left)) {
        node.left = null;
      }
      if (node.right && recur(node.right)) {
        node.right = null;
      }
      if (!node.right && !node.left && node.val === target) {
        return true;
      }
      return false;
    }
    if (recur(root)) {
      return null; 
    }
    return root;
};