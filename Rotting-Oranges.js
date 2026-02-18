1
2/**
3 * @param {number[][]} grid
4 * @return {number}
5 */
6var orangesRotting = function (grid) {
7  let m = grid.length;
8  let n = grid[0].length;
9  let numberOfFreshOrange = 0;
10  let timer = 0;
11  let currBatchNo = 0;
12  let rottenOrange = 0;
13  let isChangeHappendInCurrentBatch = false;
14  let queue = [];
15
16  for (let i = 0; i < m; i++) {
17    for (let j = 0; j < n; j++) {
18      const cellStatus = grid[i][j];
19      if (cellStatus === 1) {
20        numberOfFreshOrange++;
21      } else if (cellStatus === 2) {
22        queue.push({ place: [i, j], batchNo: 0 });
23      }
24    }
25  }
26
27  while (queue.length) {
28    const cell = queue.shift();
29    if (currBatchNo !== cell.batchNo) {
30      currBatchNo = cell.batchNo;
31      isChangeHappendInCurrentBatch = false;
32    }
33
34    const cellPlace = cell.place;
35    let isChangeHappened = false;
36    // cell adjcent changes
37    // top
38    let adjacentTop = cellPlace[0] - 1;
39    if (adjacentTop >= 0 && grid[adjacentTop][cellPlace[1]] === 1) {
40      grid[adjacentTop][cellPlace[1]] = 2;
41      isChangeHappened = true;
42      rottenOrange++;
43      queue.push({
44        place: [adjacentTop, cellPlace[1]],
45        batchNo: currBatchNo + 1,
46      });
47    }
48    // right
49    let adjacentRight = cellPlace[1] + 1;
50    if (adjacentRight < n && grid[cellPlace[0]][adjacentRight] === 1) {
51      grid[cellPlace[0]][adjacentRight] = 2;
52      isChangeHappened = true;
53      rottenOrange++;
54      queue.push({
55        place: [cellPlace[0], adjacentRight],
56        batchNo: currBatchNo + 1,
57      });
58    }
59    // bottom
60    let adjacentBottom = cellPlace[0] + 1;
61    if (adjacentBottom < m && grid[adjacentBottom][cellPlace[1]] === 1) {
62      grid[adjacentBottom][cellPlace[1]] = 2;
63      isChangeHappened = true;
64      rottenOrange++;
65      queue.push({
66        place: [adjacentBottom, cellPlace[1]],
67        batchNo: currBatchNo + 1,
68      });
69    }
70    // left
71    let adjacentLeft = cellPlace[1] - 1;
72    if (adjacentLeft >= 0 && grid[cellPlace[0]][adjacentLeft] === 1) {
73      grid[cellPlace[0]][adjacentLeft] = 2;
74      isChangeHappened = true;
75      rottenOrange++;
76      queue.push({
77        place: [cellPlace[0], adjacentLeft],
78        batchNo: currBatchNo + 1,
79      });
80    }
81
82    if (!isChangeHappendInCurrentBatch && isChangeHappened) {
83      isChangeHappendInCurrentBatch = true;
84      timer++;
85    }
86  }
87
88  //   console.log({ rottenOrange, numberOfFreshOrange, timer });
89  return rottenOrange === numberOfFreshOrange ? timer : -1;
90};