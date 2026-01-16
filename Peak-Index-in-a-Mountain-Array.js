1/**
2 * @param {number[]} arr
3 * @return {number}
4 */
5var peakIndexInMountainArray = function(arr) {
6  let i = 0,
7    j = arr.length - 1,
8    highestYet = Math.floor(j / 2);
9
10  while (true) {
11    const midIdx = Math.floor((i + j) / 2);
12    const midNum = arr[midIdx];
13
14    if (midNum > arr[highestYet]) highestYet = midIdx;
15
16    if (i >= j) break;
17
18    if (midNum > arr[midIdx + 1]) {
19      j = midIdx - 1;
20    } else {
21      i = midIdx + 1;
22    }
23    // console.log({ i, j, highestYet });
24  }
25  // console.log(highestYet);
26  return highestYet;
27};