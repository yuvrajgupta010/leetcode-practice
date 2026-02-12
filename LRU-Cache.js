1class Node {
2  constructor(key, val) {
3    this.key = key;
4    this.val = val;
5    this.prev = null;
6    this.next = null;
7  }
8}
9
10var LRUCache = function(capacity) {
11  this.capacity = capacity;
12  this.size = 0;
13  this.map = new Map();
14
15  // 🔥 dummy nodes
16  this.head = new Node(0, 0); 
17  this.tail = new Node(0, 0);
18
19  this.head.next = this.tail;
20  this.tail.prev = this.head;
21};
22
23LRUCache.prototype.removeNode = function(node) {
24  node.prev.next = node.next;
25  node.next.prev = node.prev;
26};
27
28LRUCache.prototype.addToTail = function(node) {
29  node.prev = this.tail.prev;
30  node.next = this.tail;
31
32  this.tail.prev.next = node;
33  this.tail.prev = node;
34};
35
36
37LRUCache.prototype.moveToTail = function(node) {
38  this.removeNode(node);
39  this.addToTail(node);
40};
41
42/** 
43 * @param {number} key
44 * @return {number}
45 */
46LRUCache.prototype.get = function(key) {
47      const node = this.map.get(key);
48  if (!node) return -1;
49
50  this.moveToTail(node);
51  return node.val;
52};
53
54/** 
55 * @param {number} key 
56 * @param {number} value
57 * @return {void}
58 */
59LRUCache.prototype.put = function(key, value) {
60  let node = this.map.get(key);
61
62  if (node) {
63    node.val = value;
64    this.moveToTail(node);
65  } else {
66    let newNode = new Node(key, value);
67
68    if (this.size === this.capacity) {
69      let lru = this.head.next;   // always safe
70      this.removeNode(lru);
71      this.map.delete(lru.key);
72      this.size--;
73    }
74
75    this.addToTail(newNode);
76    this.map.set(key, newNode);
77    this.size++;
78  }
79
80};
81
82/** 
83 * Your LRUCache object will be instantiated and called as such:
84 * var obj = new LRUCache(capacity)
85 * var param_1 = obj.get(key)
86 * obj.put(key,value)
87 */