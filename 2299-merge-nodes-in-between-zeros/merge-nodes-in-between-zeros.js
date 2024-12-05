/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let arr = new ListNode()
    let current = arr
    while(head.next != null) {
        if(head.val == 0){
            current.next = new ListNode(head.val)
            current = current.next  
        }
        current.val += head.val
        head = head.next
    }
    // Removing the head with zero
    arr = arr.next
    return arr
};