/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root){
        return [];
    }

    let stack = [root];
    let res = [];
    while(stack.length!==0){
        let node = stack.pop();
        res.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return res;
};

var preorderTraversal = function(root) {
    let res = [], stack = [], temp = root;
    while(stack.length!==0 || temp!==null){
        while(temp!==null){
            res.push(temp.val);
            stack.push(temp);
            temp = temp.left;
        }
        temp = stack.pop();
        temp = temp.right;
    }
    return res;
};