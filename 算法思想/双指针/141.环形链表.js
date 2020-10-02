/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head==null){
        return false;
    }

    let p1 = head, p2 = head.next;
    while(p2&&p2.next!==null){
        if(p2 == p1){
            return true;
        }
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return false;
};

var hasCycle = function(head) {
    if(head==null){
        return false;
    }

    let p1 = head, p2 = head;
    while(p2&&p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p2 == p1){
            return true;
        }
    }
    return false;
};