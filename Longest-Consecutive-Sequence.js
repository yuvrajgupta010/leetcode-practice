1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestConsecutive = function(nums) {
6  const hashMap = new Set(nums);
7  let longestCount = 0;
8  // console.log(hashMap);
9  hashMap.forEach((num, index) => {
10    if (!hashMap.has(num - 1)) {
11      let temCount = 1;
12      let nextNum = num + 1;
13      while (hashMap.has(nextNum)) {
14        temCount++;
15        nextNum++;
16      }
17      longestCount = longestCount < temCount ? temCount : longestCount;
18    }
19  });
20//   console.log(longestCount);
21  return longestCount;
22};