1/**
2 * @param {number} n
3 * @return {number}
4 */
5var fib = function(n) {
6      if (n === 0) return 0;
7  if (n === 1) return 1;
8
9  return fib(n - 2) + fib(n - 1);
10};