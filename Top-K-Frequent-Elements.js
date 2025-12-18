1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number[]}
5 */
6var topKFrequent = function(nums, k) {
7      let mapCount = new Map();
8  let frequency = [];
9  let topFrequency = [];
10
11  for (let num of nums) {
12    mapCount.set(num, (mapCount.get(num) || 0) + 1);
13  }
14
15  for (let [num, count] of mapCount) {
16    frequency[count] = frequency[count] ?? [];
17    frequency[count].push(num);
18  }
19
20  for (let i = frequency.length - 1; i >= 0; i--) {
21    console.log(frequency[i], "frequency[i]");
22    if (frequency[i]) topFrequency.push(...frequency[i]);
23    if (topFrequency.length === k) break;
24  }
25
26  // console.log(frequency);
27  // console.log(topFrequency);
28  return topFrequency;
29};