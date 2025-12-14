1/**
2 * @param {number[]} fruits
3 * @return {number}
4 */
5var totalFruit = function (fruits) {
6  let prevIdx = 0,
7    maxFruits = 0,
8    basket = new Map();
9
10  for (let currIdx = 0; currIdx < fruits.length; currIdx++) {
11    const currFruit = fruits[currIdx];
12    const justBeforeFruit = fruits[currIdx - 1];
13    if (basket.size !== 2) {
14      if (!basket.has(currFruit)) {
15        basket.set(currFruit, currIdx);
16      } else {
17        if (justBeforeFruit !== currFruit) {
18          basket.set(currFruit, currIdx);
19        }
20      }
21      maxFruits = Math.max(maxFruits, currIdx - prevIdx + 1);
22    } else {
23      if (basket.has(currFruit)) {
24        if (justBeforeFruit !== currFruit) {
25          basket.set(currFruit, currIdx);
26        }
27      } else {
28        basket.set(currFruit, currIdx);
29        const justBeforeIdx = basket.get(justBeforeFruit);
30        basket.delete(fruits[justBeforeIdx - 1]);
31        prevIdx = justBeforeIdx;
32      }
33      maxFruits = Math.max(maxFruits, currIdx - prevIdx + 1);
34    }
35    // console.log({ maxFruits, basket, currIdx });
36  }
37
38//   console.log(maxFruits);
39  return maxFruits;
40};