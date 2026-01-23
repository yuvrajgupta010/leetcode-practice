1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var isPowerOfTwo = function(n) {
6    return n > 0 && (n & (n - 1)) === 0;
7};