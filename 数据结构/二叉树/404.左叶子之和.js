/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function isLeaf(node){
    return !node.left && !node.right;
}
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function f(root){
        if(!root){
            return;
        }

        if(root.left&&isLeaf(root.left)){
            sum += root.left.val;
        }
        f(root.left);
        f(root.right);
    }
    
    f(root);
    return sum;
};