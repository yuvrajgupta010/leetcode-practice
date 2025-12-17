1/**
2 * @param {number[][]} intervals
3 * @return {number[][]}
4 */
5var merge = function(intervals) {
6      if (intervals.length === 1) return intervals;
7  intervals.sort((a, b) => a[0] - b[0]);
8
9  let maxEnd = intervals[0][1];
10  let mergedInterval = [intervals[0]];
11
12  for (let currIdx = 1; currIdx < intervals.length; currIdx++) {
13    if (maxEnd >= intervals[currIdx][0]) {
14      maxEnd = Math.max(maxEnd, intervals[currIdx][1]);
15      mergedInterval[mergedInterval.length - 1][1] = maxEnd;
16    } else {
17      maxEnd = intervals[currIdx][1];
18      mergedInterval.push(intervals[currIdx]);
19    }
20  }
21
22//   console.log(mergedInterval);
23  return mergedInterval;
24};