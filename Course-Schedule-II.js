1/**
2 * @param {number} numCourses
3 * @param {number[][]} prerequisites
4 * @return {number[]}
5 */
6var findOrder = function (numCourses, prerequisites) {
7  const adjacencyList = Array.from({ length: numCourses }, () => new Set());
8
9  const inDegree = Array.from({ length: numCourses }, () => 0);
10
11  for (let [dependant, dependency] of prerequisites) {
12    adjacencyList[dependency].add(dependant);
13    inDegree[dependant]++;
14  }
15
16  const queue = [];
17  const stack = [];
18
19  for (let i = 0; i < numCourses; i++) {
20    if (inDegree[i] === 0) queue.push(i);
21  }
22
23  let count = 0;
24  while (queue.length) {
25    const node = queue.shift();
26    stack.push(node);
27    count++;
28
29    for (let adjacentNode of adjacencyList[node]) {
30      if (!--inDegree[adjacentNode]) {
31        queue.push(adjacentNode);
32      }
33    }
34  }
35
36  // console.log({ adjacencyList, inDegree, queue, stack });
37  return count === numCourses ? stack : [];
38};