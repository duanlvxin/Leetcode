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
var inorderTraversal = function(root) {
    let res = [];
    let predecessor = null;
    while(root){
        if(root.left){
            predecessor = root.left;
            while(predecessor.right!==null && predecessor.right!==root){
                predecessor = predecessor.right;
            }
            if(!predecessor.right){
                predecessor.right = root;
                root = root.left;
            }else{
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        }else{
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};

var inorderTraversal = function(root) {
    let res = [], temp = root, stack = [];
    while(stack.length!==0 || temp!==null){
        while(temp!==null){
            stack.push(temp);
            temp = temp.left;
        }
        temp = stack.pop();
        res.push(temp.val);
        temp = temp.right;
    }
    return res;
};