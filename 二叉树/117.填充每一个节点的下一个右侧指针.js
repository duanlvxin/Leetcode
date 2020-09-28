/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//时间复杂度O(N),空间复杂度O(N)
var connect = function(root) {
    if(!root){
        return root;
    }
    let res = [root];
    while(res.length){
        let temp = [...res];
        while(temp.length>1){
            let node = temp[temp.length-1];
            let next = temp[temp.length-2];
            node.next = next;
            temp.pop();
        }

        let n = res.length;
        for(let i=0;i<n;i++){
            let node = res.pop();
            if(node.left){
                res.unshift(node.left);
            }
            if(node.right){
                res.unshift(node.right);
            }
        }
    }
    return root;
};

//时间复杂度O(N),空间复杂度O(1)
let nextStart=null,last=null;
const handle = function(p){
    if(last!==null){
        last.next = p;
    }
    if(nextStart==null){
        nextStart = p;
    }
    last = p;
}
var connect = function(root) {
    if(!root){
        return null;
    }
    
    let start = root;
    while(start!==null){
        nextStart = null;
        last = null;
        for(let p=start;p!=null;p=p.next){
            if(p.left){
                handle(p.left);
            }
            if(p.right){
                handle(p.right);
            }
        }
        start = nextStart;
    }
    return root;
};