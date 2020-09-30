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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    const helper = function(root){
        if(!root){
            return res;
        }

        let stack = [], temp = root;
        while(temp!==null || stack.length!==0){
            if(temp!==null){
                res.unshift(temp.val);
                stack.push(temp);
                temp = temp.right;
            }else{
                let node = stack.pop();
                temp = node.left;
            }
        }
        return res;
    }
    
    return helper(root);
};


var postorderTraversal = function(root) {
    if(!root){
        return [];
    }    
    let res = [],stack=[root];
    while(stack.length!==0){
        let node = stack.pop();
        res.unshift(node.val);
        if(node.left){
            stack.push(node.left);
        }
        if(node.right){
            stack.push(node.right);
        }
    }
    return res;
};