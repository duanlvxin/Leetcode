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
var minCameraCover = function(root) {
    function dfs(root){
        if(!root){
            return [Number.MAX_VALUE/2,0,0];
        }

        let [la,lb,lc] = dfs(root.left);
        let [ra,rb,rc] = dfs(root.right);
        let a = lc + rc + 1;
        let b = Math.min(a,Math.min(la+rb,ra+lb));
        let c = Math.min(a,lb+rb);
        return [a,b,c];
    }
    let [a,b,c] = dfs(root);
    return b;
};



/**
** a:root 必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
** b:覆盖整棵树需要的摄像头数目，无论 root 是否放置摄像头。
** c:覆盖两棵子树需要的摄像头数目，无论节点 root 本身是否被监控到。
** 有a>=b>=c
** 因此a = lc+rc+1(加上root放的摄像头）
** b两种情况中取最小值：一是root放摄像头，而是root不放摄像头，那么左右孩子至少有一个需要放摄像头(la或ra);
** c两种情况取最小值：一是root放摄像头，而是root不放摄像头，保证左右两颗子树都覆盖(lb+rb);
**/




/*****更容易理解的方案
** https://leetcode-cn.com/problems/binary-tree-cameras/solution/cong-xia-wang-shang-ji-suan-ji-bai-liao-100de-yong/
** 这题正常的逻辑是从上往下，但我们还可以逆向思维，从下往上来统计。那么一个节点就会有3种情况
** 1，当前节点有相机
** 2，当前节点不需要相机（子节点有相机把它给覆盖了）
** 3，当前节点没有相机并且也没有被子节点给覆盖（那么他只能等他的父节点把它给覆盖了）
*******************************************************************************/
var minCameraCover = function(root) {
    let res = 0;
    let NO_CAMARA = 0;
    let HAS_CAMARA = 1;
    let NO_NEEDED = 2;

    function dfs(root){
        if(!root){
            return NO_NEEDED;
        }

        let left = dfs(root.left),right = dfs(root.right);
        if(left==NO_CAMARA||right==NO_CAMARA){
            res ++;
            return HAS_CAMARA;
        }
        return left==HAS_CAMARA||right==HAS_CAMARA?NO_NEEDED:NO_CAMARA;
    }

    if(!root){
        return 0;
    }
    if(dfs(root)==NO_CAMARA){
        res ++;
    }
    return res;
};
