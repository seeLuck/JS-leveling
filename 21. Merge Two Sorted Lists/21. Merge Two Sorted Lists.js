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

/**
 * 这道题没做出来,思路是有的,就是建一个新链表,然后依次比较两个链表的项,把小的那个项加入新链表,同时小项链表前进一格,再循环。
 * 但是coding的时候,这个循环怎么写都没写好,写着写着就乱了。
 * 然后去discuss找了答案,思想相同,不过代码简洁明快,短短几行就解决了我认为比较复杂的逻辑。
 * 看来这种递归的思想我还没有掌握得深刻,无法信手拈来。
 */
var mergeTwoLists = function(l1, l2) {
    var head;
    if(l1===null)
        return l2;
    if(l2===null)
        return l1;
    if(l1.val<=l2.val){
        head = l1;
        head.next = mergeTwoLists(l1.next,l2);
    }else{
        head = l2;
        head.next = mergeTwoLists(l1,l2.next);
    }
    return head;
};