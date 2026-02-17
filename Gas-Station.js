1/**
2 * @param {number[]} gas
3 * @param {number[]} cost
4 * @return {number}
5 */
6var canCompleteCircuit = function (gas, cost) {
7  let totalGas = 0,
8    totalCost = 0;
9
10  for (let i = 0; i < gas.length; i++) {
11    totalGas += gas[i];
12    totalCost += cost[i];
13  }
14
15  if (totalGas < totalCost) {
16    return -1;
17  }
18
19  let start = 0,
20    currGas = 0;
21
22  for (let i = 0; i < gas.length; i++) {
23    currGas += gas[i] - cost[i];
24
25    if (currGas < 0) {
26      start = i + 1;
27      currGas = 0;
28    }
29  }
30
31  return start;
32};