1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6 const map = new Map();
7  let prevIdx = 0;
8  let maxLength = 0;
9
10  for (let curr = 0; curr < s.length; curr++) {
11    const currChar = s[curr];
12    if (map.has(currChar) && map.get(currChar) >= prevIdx) {
13      prevIdx = map.get(currChar) + 1;
14      map.set(currChar, curr);
15    //   console.log({ map, curr, prevIdx, maxLength });
16    } else {
17      map.set(currChar, curr);
18      const expectedNewMax = curr + 1 - prevIdx;
19      maxLength = expectedNewMax > maxLength ? expectedNewMax : maxLength;
20    //   console.log({ map, curr, prevIdx, maxLength });
21    }
22  }
23  return maxLength;
24};