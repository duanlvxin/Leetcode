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
var findTilt = function(root) {
    let res = 0;
    function f(root){
        if(!root){
            return 0;
        }
        let left = f(root.left);
        let right = f(root.right);
        res += Math.abs(left-right);
        return left+right+root.val;
    }
    f(root);
    return res;
};