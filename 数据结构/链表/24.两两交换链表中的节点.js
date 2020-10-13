function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head===null || head.next===null){
        return head;
    }

    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

var swapPairs = function(head) {
    if(head===null || head.next===null){
        return head;
    }

    let newHead = head.next;
    let p = head,q=head.next;
    while(q){
        if(q.next!==null){
            let temp_p = p.next.next,temp_q = q.next.next;
            if(temp_q!==null){
                p.next = q.next.next;
                q.next = p;
                p = temp_p;
                q = temp_q;
            }else{
                p.next = q.next;
                q.next = p;
                break;
            }
        }else{
            p.next = q.next;
            q.next = p;
            break;
        }
    }
    return newHead;
};

var swapPairs = function(head) {
    if(head===null || head.next===null){
        return head;
    }

    let newHead = head.next;
    let p = head,q=head.next;
    while(q){
        if(q.next!==null&&q.next.next!==null){
            let temp_p = p.next.next,temp_q = q.next.next;
            p.next = q.next.next;
            q.next = p;
            p = temp_p;
            q = temp_q;
        }else{
            p.next = q.next;
            q.next = p;
            break;
        }
    }
    return newHead;
};