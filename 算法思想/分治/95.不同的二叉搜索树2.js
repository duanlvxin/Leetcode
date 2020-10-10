/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const helper = function(s,n){
        if(n<s){
            return [null];
        }else if(s==n){
            return [new TreeNode(n)];
        }

        let res = [];
        for(let i=s;i<=n;i++){
            let left = helper(s,i-1),right = helper(i+1,n);
            for(let item of left){
                for(let item2 of right){
                    //选取i作为根节点
                    let root = new TreeNode(i);
                    root.left = item;
                    root.right = item2;
                    res.push(root);
                }
            }
        }
        return res;
    }

    if(n==0){
        return [];
    }
    return helper(1,n);
};