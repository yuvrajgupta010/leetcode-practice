1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @param {number} left
11 * @param {number} right
12 * @return {ListNode}
13 */
14var reverseBetween = function(head, left, right) {
15       if (!head || left === right) {
16        return head;
17    }
18
19    const dummy = new ListNode(0, head);
20    let prev = dummy;
21
22    for (let i = 0; i < left - 1; i++) {
23        prev = prev.next;
24    }
25
26    let cur = prev.next;
27
28    for (let i = 0; i < right - left; i++) {
29        const temp = cur.next;
30        cur.next = temp.next;
31        temp.next = prev.next;
32        prev.next = temp;
33    }
34
35    return dummy.next;   
36};