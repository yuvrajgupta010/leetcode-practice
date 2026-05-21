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
11      for (let i = 0; i < tracker.length; i++) {
12        if (tracker[i] < num) {
13          // code
14          tracker.splice(i, 0, num);
15          tracker.pop();
16          map.add(num);
17          break;
18        }
19      }
20    }
21  }
22
23  return tracker.at(-1) === -Infinity ? tracker[0] : tracker.at(-1);
24};