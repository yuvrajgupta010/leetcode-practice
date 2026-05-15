1/**
2 * @param {number} n
3 * @return {string[]}
4 */
5var simplifiedFractions = function (n) {
6  const pairs = [];
7  const map = new Set();
8
9  for (let i = 2; i <= n; i++) {
10    // denominator
11    for (let j = i - 1; j >= 1; j--) {
12      // nominatior
13      const division = (j / i).toFixed(7);
14
15      if (!map.has(division)) {
16        pairs.push(j + "/" + i);
17        map.add(division);
18      }
19    }
20  }
21
22  // console.log(pairs);
23  return pairs;
24};