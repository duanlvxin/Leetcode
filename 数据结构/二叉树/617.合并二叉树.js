/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1&&!t2){
        return null;
    }

    let root = new TreeNode(0);
    if(t1&&t2){
        root.val = t1.val + t2.val;
        root.left = mergeTrees(t1.left,t2.left);
        root.right = mergeTrees(t1.right,t2.right);
    }else if(t1&&!t2){
        root=t1;
    }else if(!t1&&t2){
        root= t2;
    }
    return root;
};