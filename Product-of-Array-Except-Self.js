1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6  const products = Array(nums.length);
7  let suffixProduct = 1;
8
9  //   const returnArr = Array(nums.length);
10
11  for (let i = 0; i < nums.length; i++) {
12    products[i] = (products[i - 1] ?? 1) * (nums[i - 1] ?? 1);
13  }
14
15  for (let j = nums.length - 1; j >= 0; j--) {
16    suffixProduct *= nums[j + 1] ?? 1;
17    products[j] = products[j] * suffixProduct;
18  }
19
20//   console.log(products);
21  return products;
22};