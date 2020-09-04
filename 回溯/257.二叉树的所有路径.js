/**给定一个二叉树，返回所有从根节点到叶子节点的路径。 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
/********************回溯法*************************** */
var binaryTreePaths = function(root) {
    function findRoute(root,temp){
        if(root.left==null&&root.right==null){
            res.push(temp.join("->"));
            return;
        }
        if(root.left){
            temp.push(root.left.val);
            findRoute(root.left,temp);
            temp.pop();
        }
        if(root.right){
            temp.push(root.right.val);
            findRoute(root.right,temp);
            temp.pop();
        }
    }
    
    var res = [];
    if(root==null){
        return [];
    }
    let temp = [root.val];
    findRoute(root,temp);
    return res;
};


/***********************DFS**************************8 */
/**
 * 或者用dfs 下面是python解法
 */
// class Solution(object):
//     def binaryTreePaths(self, root):
//         """
//         :type root: TreeNode
//         :rtype: List[str]
//         """
//         if not root:
//             return []
            
//         def dfs(root,route):
//             if((not root.left) and (not root.right)):
//                 route += str(root.val)
//                 res.append(route)
//             if(root.left):
//                 dfs(root.left,route+str(root.val)+'->')
//             if(root.right):
//                 dfs(root.right,route+str(root.val)+'->')

//         res = []
//         dfs(root,'')
//         return res