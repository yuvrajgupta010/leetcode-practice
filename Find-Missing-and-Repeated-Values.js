1/**
2 * @param {number[][]} grid
3 * @return {number[]}
4 */
5var findMissingAndRepeatedValues = function(grid) {
6  const repeatAndMissedArr = [];
7  const tracker = Array(grid[0].length ** 2).fill(undefined);
8
9  for (let i = 0; i < grid.length; i++) {
10    for (let j = 0; j < grid[0].length; j++) {
11      if (tracker[grid[i][j] - 1]) {
12        repeatAndMissedArr.push(grid[i][j]);
13      } else {
14        tracker[grid[i][j] - 1] = grid[i][j];
15      }
16    }
17  }
18  // console.log(tracker);
19  tracker.forEach((item, i) => {
20    console.log(item);
21    if (!item) repeatAndMissedArr.push(i + 1);
22  });
23
24  // console.log(repeatAndMissedArr);
25  return repeatAndMissedArr;
26};