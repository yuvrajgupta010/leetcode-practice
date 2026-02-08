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
15  let currentHead = head;
16  const hashMap = new Map();
17
18  while (currentHead) {
19    hashMap.set(currentHead, new _Node(currentHead.val, null, null));
20    currentHead = currentHead.next;
21  }
22
23  currentHead = head;
24  while (currentHead) {
25    const clonedCurrentNode = hashMap.get(currentHead);
26
27    // next wiring
28    const currentHeadNext = currentHead.next;
29    if (currentHeadNext) {
30      const clonedNextNode = hashMap.get(currentHeadNext);
31      clonedCurrentNode.next = clonedNextNode;
32    }
33
34    // random wiring
35    const currentHeadRandom = currentHead.random;
36    if (currentHeadRandom) {
37      const clonedRandomNode = hashMap.get(currentHeadRandom);
38      clonedCurrentNode.random = clonedRandomNode;
39    }
40
41    currentHead = currentHead.next;
42  }
43
44  const returnHead = hashMap.get(head);
45  // console.log(head);
46
47  // console.log(returnHead);
48  return returnHead;
49};