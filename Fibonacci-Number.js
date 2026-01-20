1/**
2 * @param {number} n
3 * @return {number}
4 */
5var fib = function(n) {
6      if (n === 0) return 0;
7  if (n === 1) return 1;
8  let a = 0,
9    b = 1;
10  for (let i = 2; i <= n; i++) {
11    [a, b] = [b, a + b];
12  }
13  // console.log(b);
14  return b;
15};