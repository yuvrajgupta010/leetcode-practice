1/**
2 * Definition for singly-linked list.
3 * function ListNode(val) {
4 *     this.val = val;
5 *     this.next = null;
6 * }
7 */
8
9/**
10 * @param {ListNode} head
11 * @return {boolean}
12 */
13var hasCycle = function(head) {
14        let currHead = head;
15
16    while (currHead) {
17      if (currHead.value === null) return true;
18      currHead.value = null;
19      currHead = currHead.next;
20    }
21
22    return false;
23};