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
var averageOfLevels = function(root) {
    if(!root){
        return [];
    }

    let temp = [];
    let res = [];
    temp.push(root);
    while(temp.length){
        let sum = 0;
        let n = temp.length;
        for(let i=0;i<n;i++){
            let node = temp.pop();
            sum += node.val;
            if(node.left){
                temp.unshift(node.left);
            }
            if(node.right){
                temp.unshift(node.right);
            }
        }
        res.push(sum/n);
    }
    return res;
};