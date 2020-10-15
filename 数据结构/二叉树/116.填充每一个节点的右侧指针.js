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
var connect = function(root) {
    if(root===null || (root.left==null && root.right==null)){
        return root;
    }

    let start = root,p;
    while(start!==null){
        p = start;
        while(p!==null && p.left!==null){
            p.left.next = p.right;
            if(p.next!==null){
                p.right.next = p.next.left;
            }
            p = p.next;
        }
        start = start.left;
    }
    return root;
};