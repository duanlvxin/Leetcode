function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
}


var pathSum = function(root, sum) {
    function dfs(root,target,temp){
        if(!root){
            return;
        }
        if(!root.left && !root.right && root.val==target){
            temp.push(root.val);
            res.push(temp);
            return;
        }

        temp.push(root.val);
        dfs(root.left,target-root.val,[...temp]);
        dfs(root.right,target-root.val,[...temp]);
    }

    let res = [];
    dfs(root,sum,[]);
    return res;
};

let root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
console.log(pathSum(root,6));