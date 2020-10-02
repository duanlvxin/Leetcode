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
/**二叉树的深度 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    function helper(root){
        if(!root){
            return 0;
        }
        let left = helper(root.left)+1;
        let right = helper(root.right)+1;
        if(left+right-2>res){
            res = left+right-2;
        }
        return Math.max(left,right);
    }
    helper(root);
    return res;
};