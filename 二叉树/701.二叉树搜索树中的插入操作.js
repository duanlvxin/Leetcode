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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let p = root, pre=null,flag=0;
    if(!p){
        return new TreeNode(val);
    }
    while(p){
        pre = p;
        if(p.val<val){
            flag = 1;
            p = p.right;
        }else if(p.val>val){
            flag = 2;
            p = p.left;
        }
    }
    if(flag==1){
        pre.right = new TreeNode(val);
    }else if(flag==2){
        pre.left = new TreeNode(val);
    }
    return root;
};


//更好看的写法
var insertIntoBST = function(root, val) {
    if(root==null){
        return new TreeNode(val);
    }

    let p = root;
    while(p){
        if(p.val<val){
            if(p.right==null){
                p.right = new TreeNode(val);
                break;
            }else{
                p = p.right;
            }
        }else if(p.val>val){
            if(p.left==null){
                p.left = new TreeNode(val);
                break;
            }else{
                p = p.left;
            }
        }
    }

    return root;
};