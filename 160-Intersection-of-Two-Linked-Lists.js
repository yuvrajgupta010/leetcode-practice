/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
      const map = new Set();

  let currNode = headA;
  while (currNode) {
    map.add(currNode);
    currNode = currNode.next;
  }

  currNode = headB;
  while (currNode) {
    if (map.has(currNode)) {
      return currNode;
    } else {
      currNode = currNode.next;
    }
  }

  return null;
};