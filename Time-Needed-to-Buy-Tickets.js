1
2class _Node {
3  constructor(value, isTarget) {
4    this.value = value;
5    this.isTarget = isTarget;
6    this.next = null;
7  }
8}
9
10class _Queue {
11  constructor() {
12    this.first = null;
13    this.last = null;
14    this.size = 0;
15  }
16
17  enqueue(value, isTarget) {
18    const node = new _Node(value, isTarget);
19    if (!this.size) {
20      this.first = node;
21      this.last = node;
22    } else {
23      this.last.next = node;
24      this.last = node;
25    }
26    this.size++;
27  }
28
29  dequeue() {
30    if (!this.size) return null;
31
32    const node = this.first;
33    if (this.size === 1) {
34      this.first = null;
35      this.last = null;
36    } else {
37      const tem = this.first;
38      this.first = tem.next;
39    }
40    this.size--;
41    node.next = null;
42    return node;
43  }
44}
45
46/**
47 * @param {number[]} tickets
48 * @param {number} k
49 * @return {number}
50 */
51var timeRequiredToBuy = function (tickets, k) {
52  let queue = new _Queue();
53  let time = 0;
54
55  for (let index = 0; index < tickets.length; index++) {
56    queue.enqueue(tickets[index], k === index);
57  }
58
59  while (queue.size) {
60    time++;
61    const person = queue.dequeue();
62    person.value -= 1;
63    // console.log(person);
64
65    if (!person.value) {
66      if (person.isTarget) return time;
67    } else {
68      queue.enqueue(person.value, person.isTarget);
69    }
70  }
71};