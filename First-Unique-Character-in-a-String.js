1
2class Node {
3  constructor(value) {
4    this.value = value;
5    this.next = null;
6  }
7}
8
9class QueueStack {
10  constructor() {
11    this.first = null;
12    this.last = null;
13    this.size = 0;
14  }
15
16  enqueue(value) {
17    const node = new Node(value);
18    if (!this.size) {
19      this.first = node;
20      this.last = node;
21    } else {
22      this.last.next = node;
23      this.last = node;
24    }
25    this.size++;
26  }
27
28  dequeue() {
29    if (!this.size) return null;
30    const tem = this.first;
31    if (this.size === 1) {
32      this.first = null;
33      this.last = null;
34    } else {
35      const temp = this.first;
36      this.first = temp.next;
37    }
38    this.size--;
39    return tem.value;
40  }
41}
42
43/**
44 * @param {string} s
45 * @return {number}
46 */
47var firstUniqChar = function (s) {
48  const queue = new QueueStack();
49  const map = {};
50
51  for (let i = 0; i < s.length; i++) {
52    if (map[s[i]]) {
53      map[s[i]]++;
54    } else {
55      queue.enqueue({ char: s[i], index: i });
56      map[s[i]] = 1;
57    }
58  }
59
60  while (queue.size) {
61    const nodeValue = queue.dequeue();
62    if (map[nodeValue.char] === 1) return nodeValue.index;
63  }
64
65  return -1;
66};