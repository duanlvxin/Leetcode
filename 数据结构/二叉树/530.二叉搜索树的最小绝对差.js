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

var getMinimumDifference = function(root) {
    var getMinimum = function(root){
        let p,q,min=Infinity;
        //左子树的最右边节点
        if(root.left){
            p = root.left;
            while(p.right){
                p = p.right;
            }
        }
        //右子树的最左边节点
        if(root.right){
            q = root.right;
            while(q.left){
                q = q.left;
            }
        }
        if(p){
            min = Math.min(min,root.val-p.val);
        }
        if(q){
            min = Math.min(min,q.val-root.val);
        }

        return min;
    }

    var dfs = function(root){
        if(root){
            min = Math.min(getMinimum(root),min);
            dfs(root.left);
            dfs(root.right);
        }
    }
    
    let min = Infinity;
    if(!root||(!root.left && !root.right)){
        return 0;
    }
    dfs(root);
    return min;
};

/**
 * 更好的方法，使用中序遍历
 */
var getMinimumDifference = function(root) {
    var middleTraverse = function(root){
        if(root){
            middleTraverse(root.left);
            res.push(root.val);
            middleTraverse(root.right);
        }
    }

    let min = Infinity,res=[];
    middleTraverse(root);
    for(let i=0;i<res.length-1;i++){
        min = Math.min(res[i+1]-res[i],min);
    }
    return min;
};


var getMinimumDifference = function(root) {
    var middleTraverse = function(root){
        if(root){
            middleTraverse(root.left);
            if(pre==-1){
                pre = root.val;
            }else{
                min = Math.min(Math.abs(root.val-pre),min);
                pre = root.val;
            }
            middleTraverse(root.right);
        }
    }

    let min = Infinity,pre=-1;
    middleTraverse(root);
    return min;
};


var getMinimumDifference = function(root){
    var middleTraverse = function(root) {
        let temp = root, stack = [];
        while(stack.length!==0 || temp!==null){
            while(temp!==null){
                stack.push(temp);
                temp = temp.left;
            }
            temp = stack.pop();
            if(pre==-1){
                pre = temp.val;
            }else{
                min = Math.min(temp.val-pre,min);
                pre = temp.val;
            }
            temp = temp.right;
        }
    };

    let min = Infinity,pre = -1;
    middleTraverse(root);
    return min;
}
