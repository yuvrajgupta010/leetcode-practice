1
2class Node {
3  constructor(key, val) {
4    this.key = key;
5    this.val = val;
6    this.prev = null;
7    this.next = null;
8  }
9}
10
11class DDL {
12  constructor() {
13    this.head = null;
14    this.tail = null;
15  }
16}
17
18/**
19 * @param {number} capacity
20 */
21var LRUCache = function (capacity) {
22  this.capacity = capacity;
23  this.hashMap = new Map();
24  this.doubleLinkList = new DDL();
25};
26
27/**
28 * @param {number} key
29 * @return {number}
30 */
31LRUCache.prototype.get = function (key) {
32  const node = this.hashMap.get(key);
33  const dd = this.doubleLinkList;
34
35  if (node) {
36    if (node === dd.tail) {
37      return node.val;
38    } else if (node === dd.head) {
39      const saveNode = dd.head;
40      dd.head = saveNode.next;
41      dd.head.prev = null;
42
43      dd.tail.next = saveNode;
44      saveNode.prev = dd.tail;
45      saveNode.next = null;
46      dd.tail = saveNode;
47      return node.val;
48    } else {
49      let temNext = node.next;
50      let temPrev = node.prev;
51      temPrev.next = temNext;
52      temNext.prev = temPrev;
53
54      node.prev = dd.tail;
55      dd.tail.next = node;
56      node.next = null;
57      dd.tail = node;
58      return node.val;
59    }
60  } else {
61    return -1;
62  }
63  // console.log(key, node ? node.val : -1, this.hashMap);
64  // return node ? node.val : -1;
65};
66
67/**
68 * @param {number} key
69 * @param {number} value
70 * @return {void}
71 */
72LRUCache.prototype.put = function (key, value) {
73  const hm = this.hashMap;
74  const dd = this.doubleLinkList;
75
76  const node = this.hashMap.get(key);
77
78  // node not exist
79  if (!node) {
80    let newNode = new Node(key, value);
81
82    // have memory
83    if (this.capacity) {
84      // fresh insert when nothing exist
85      if (dd.tail === null) {
86        dd.head = newNode;
87        dd.tail = newNode;
88      } else {
89        // insert when something exist
90        newNode.prev = dd.tail;
91        dd.tail.next = newNode;
92        dd.tail = newNode;
93      }
94      this.capacity--;
95    } else {
96      // don't have memory
97      dd.head ? hm.delete(dd.head.key) : null;
98      // when capacity is for single node
99      if (dd.head === dd.tail) {
100        dd.head = newNode;
101        dd.tail = newNode;
102      } else {
103        // when capacity is higher then for single node
104        dd.head = dd.head.next;
105        dd.tail.next = newNode;
106        newNode.prev = dd.tail;
107        dd.tail = newNode;
108      }
109    }
110    hm.set(key, newNode);
111    // console.log(dd.tail, hm);
112  } else {
113    // when node exist
114    node.val = value;
115
116    // when node  is already at last
117    if (node === dd.tail) {
118      return;
119    } else if (node === dd.head) {
120      // when update node is equal to head
121      let saveNode = node;
122      dd.head = node.next;
123      dd.tail.next = saveNode;
124      saveNode.prev = dd.tail;
125      saveNode.next = null;
126      dd.tail = saveNode;
127    } else {
128      // when update node is somewhere middle
129      let temNext = node.next;
130      let temPrev = node.prev;
131      temPrev.next = temNext;
132      temNext.prev = temPrev;
133
134      node.prev = dd.tail;
135      dd.tail.next = node;
136      node.next = null;
137      dd.tail = node;
138    }
139  }
140};
141
142/**
143 * Your LRUCache object will be instantiated and called as such:
144 * var obj = new LRUCache(capacity)
145 * var param_1 = obj.get(key)
146 * obj.put(key,value)
147 */