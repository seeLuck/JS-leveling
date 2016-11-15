/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 在链表前面再加一个node,以便处理n==总长度的情况。
 * 本代码只有一个链表firstNode,一开始它是一个单独的节点,.next指向head后形成链表。tagNode和ansNode都是对其地址的引用。
 * 循环n次的原因是,假设要移掉倒数第2个节点,tagNode在移动2次之后,从第3次开始ansNode就要跟着倒数第2个节点开始动了。
 * 如果链表长度小余n,即循环还未结束ansNode就移动到了尾部,就直接返回原来的链表。
 * 当tagNode移动到尾部时,将更随在倒数第n的节点左边的ansNode的next指向它的下一个的下一个,再返回firstNode即可。
 */

var removeNthFromEnd = function(head, n) {
    var firstNode = new ListNode(null);
    firstNode.next = head;
    var tagNode = firstNode;
    var ansNode = firstNode;
    for(var i=0;i<n;i++){
        if(tagNode.next===null)
            return firstNode.next;
        tagNode = tagNode.next;
    }
    while (tagNode.next!==null){
        tagNode = tagNode.next;
        ansNode = ansNode.next;
    }
    ansNode.next = ansNode.next.next;
    return firstNode.next
};

/**
 * 这是道很好的题,因为这是一道很简单的题,但是我一开始却无从下手。我虽然知道链表是啥,但是js原生是不带ListNode这个类型的。也就是说此题我在本地是跑不通的,也不知道具leetcode是如何实现这个ListNode的,虽然给出了定义,参考传参又是个数组,一开始完全把我整懵逼了。
 * 然后直接去discuss里找分析和答案,看完虽然意思懂了,但是完全不理解为何能这么写,直接各种.next就用起来了,什么玩意嘛。
 * 接着不管那么多了,先照着分析的逻辑,自己也coding了一下。取倒数第N个节点的思想还是很亮的。虽然改了个通过了,但是还是不知道这代码到底是怎么实现的。
 * 最后把leetcode上的ListNode的实现打了出来,秒懂。。。
 * 我输入[1,2,3],打出来的链表就是ListNode {val: 1,next: ListNode { val: 2, next: ListNode { val: 3, next: null } } }
 * 也就是说leetcode内部实现了一套js的链表(这个其实在我看js版的数据结构时学过源码)。head看似是个数组,其实直接把它理解为链表,直接调用next就行了(我就说通篇没看到怎么实现的,答案里怎么调next随便调就行了)
 * 说细一点,head就是一个链表对象的实体,代码里firstNode.next = head就是取到了这个实体在堆中的地址装在next里,然后再一层层往下找,直到.next==null
 * 此题打响了我用js向数据结构进军的第一枪。
 */
