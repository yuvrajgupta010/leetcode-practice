1/**
2 * // Definition for a _Node.
3 * function _Node(val, next, random) {
4 *    this.val = val;
5 *    this.next = next;
6 *    this.random = random;
7 * };
8 */
9
10/**
11 * @param {_Node} head
12 * @return {_Node}
13 */
14var copyRandomList = function(head) {
15    if (!head) return null;
16   let curr = head;
17
18  // 1st step of two pass - creation
19  while (curr) {
20    const copy = new _Node(curr.val, curr.next, null);
21    curr.next = copy;
22    curr = copy.next;
23  }
24
25  curr = head;
26  // 2nd step of two pass - connection or wiring
27  // connecting random
28  while (curr) {
29    if (curr.random) {
30      curr.next.random = curr.random.next;
31    }
32    curr = curr.next.next;
33  }
34
35  curr = head;
36  let copyList = new _Node(-1, null, null);
37  let last = copyList;
38  // resetting original
39  while (curr) {
40    last.next = curr.next;
41    curr.next = curr.next.next;
42
43    // last.next.next = null;
44    last = last.next;
45    curr = curr.next;
46  }
47
48  return copyList.next;
49};