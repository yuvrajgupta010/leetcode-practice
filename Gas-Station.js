1/**
2 * @param {number[]} gas
3 * @param {number[]} cost
4 * @return {number}
5 */
6var canCompleteCircuit = function(gas, cost) {
7    let total = 0, curr = 0, start = 0;
8
9for (let i = 0; i < gas.length; i++) {
10  const diff = gas[i] - cost[i];
11  total += diff;
12  curr += diff;
13
14  if (curr < 0) {
15    start = i + 1;
16    curr = 0;
17  }
18}
19
20return total < 0 ? -1 : start;
21};