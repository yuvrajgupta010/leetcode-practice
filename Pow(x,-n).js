1/**
2 * @param {number} x
3 * @param {number} n
4 * @return {number}
5 */
6var myPow = function(x, n) {
7  let power = Math.abs(n);
8  let result = 1;
9
10  while (power > 0) {
11    if (power % 2 === 1) {
12      result *= x;
13    }
14    x *= x;
15    power = Math.floor(power / 2);
16    // console.log({ result, power });
17  }
18  // console.log({ result, power });
19
20  return n < 0 ? 1 / result : result;
21};