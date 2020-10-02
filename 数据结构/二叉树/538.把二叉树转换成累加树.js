/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    function midTraverse(root){
        if(root){
            midTraverse(root.right);
            sum += root.val;
            root.val = sum;
            midTraverse(root.left);
        }
    }

    midTraverse(root);
    return root;
};


var convertBST2 = function(root) {
    function midTraverse(root){
        if(root){
            midTraverse(root.left);
            temp.push(root.val);
            midTraverse(root.right);
        }
    }

    function reverseMidTraverse(root){
        if(root){
            reverseMidTraverse(root.left);
            root.val = temp.shift();
            reverseMidTraverse(root.right);
        }
    }

    if(!root){
        return null;
    }

    let temp = [];
    midTraverse(root);
    for(let i=0,n=temp.length;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            temp[i] += temp[j];
        }
    }

    reverseMidTraverse(root);
    return root;
};