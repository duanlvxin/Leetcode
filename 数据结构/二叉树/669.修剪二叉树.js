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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if(!root){
        return root;
    }

    if(root.val>high){
        let left = root.left;
        root = null;
        return trimBST(left,low,high);
    }else if(root.val<low){
        let right = root.right;
        root = null;
        return trimBST(right,low,high);
    }else{
        root.left = trimBST(root.left,low,high);
        root.right = trimBST(root.right,low,high);
        return root;
    }
};