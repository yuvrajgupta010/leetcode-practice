1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var thirdMax = function (nums) {
6  const tracker = [-Infinity, -Infinity, -Infinity];
7  const map = new Set();
8
9  for (let num of nums) {
10    if (!map.has(num)) {
11      map.add(num);
12      for (let i = 0; i < tracker.length; i++) {
13        if (tracker[i] < num) {
14          // code
15          tracker.splice(i, 0, num);
16          tracker.pop();
17          break;
18        }
19      }
20    }
21  }
22
23  return tracker[2] === -Infinity ? tracker[0] : tracker[2];
24};