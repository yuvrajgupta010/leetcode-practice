1/**
2 * @param {number[][]} intervals
3 * @return {number}
4 */
5var eraseOverlapIntervals = function(intervals) {
6 intervals.sort((a, b) => a[0] - b[0]);
7  let overlappingCount = 0;
8  let minEnd = intervals[0][1];
9
10  for (let i = 1; i < intervals.length; i++) {
11    if (intervals[i][0] < minEnd) {
12      overlappingCount++;
13      minEnd = Math.min(minEnd, intervals[i][1]);
14    } else {
15      minEnd = intervals[i][1];
16    }
17  }
18
19  return overlappingCount;
20};