/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, pre = 0) {
    let root = new ListNode(null);

    if(!l1&&!l2&&pre==0){
        return null;
    }else if(!l1&&!l2&&pre!=0){
        return new ListNode(pre);
    }

    if(l1==null&&l2!=null){
        return addTwoNumbers(new ListNode(pre),l2);
    }else if(l1!=null&&l2==null){
        return addTwoNumbers(l1,new ListNode(pre));
    }
    let sum = l1.val + l2.val + pre;
    if(sum<=9){
        root.val = sum;
        root.next = addTwoNumbers(l1.next, l2.next, 0);
    }else{
        root.val = sum - 10;
        root.next = addTwoNumbers(l1.next, l2.next, 1);
    }
    return root;
};

var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let p = l1, q = l2, carry = 0, cur = root;
    while(p!==null||q!==null){
        let a = (p!==null)?p.val:0;
        let b = (q!==null)?q.val:0;
        let sum = a + b + carry;
        cur.next = new ListNode(sum%10);
        cur = cur.next;
        carry = parseInt(sum/10);
        if(p!==null){p=p.next;}
        if(q!==null){q=q.next;}
    }
    if(carry){
        cur.next = new ListNode(carry);
    }
    return root.next;
};