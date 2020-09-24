/**https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/solution/501-er-cha-sou-suo-shu-zhong-de-zhong-shu-bao-li-t/
 * 采用中序遍历
 */
var findMode = function(root) {
    function middleTraverse(root){
        if(!root){
            return;
        }
        middleTraverse(root.left);
        let cur = root;
        if(pre==null){
            count = 1;
        }else if(pre.val==cur.val){
            count++;
        }else{
            count = 1;
        }

        if(count>maxCount){
            res = [];
            maxCount = count;
            res.push(cur.val);
        }else if(count==maxCount){
            res.push(cur.val);
        }
        pre = cur;
        middleTraverse(root.right);
    }

    let count = 0, maxCount = 0, pre=null,res = [];
    middleTraverse(root);
    return res;
};