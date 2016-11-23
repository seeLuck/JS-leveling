/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 非常好的一道题,因为很简单而我又没做出来。又是跪倒在递归思想上。
 * 为此我专门查阅了相关资料,并且写了一篇博文(理解神的思想)以强化我的递归思维。
 * 今天重新再来写了一遍这个题,感觉清晰非常多,有进步。
 */
var swapPairs = function(head) {
    if(!head||!head.next)
            return head;
    var a = head, b = head.next, c = b.next;
    b.next = a;
    a.next = swapPairs(c);
};