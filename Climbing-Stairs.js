1/**
2 * @param {number} n
3 * @return {number}
4 */
5var climbStairs = function(n) {
6      let prv1 = 1;
7    let prv2 = 1;
8
9    for (let i = 0; i < n; i++) {
10        let tmp = prv1;
11        prv1 = prv1 + prv2;
12        prv2 = tmp;
13    }
14
15    return prv2;
16};