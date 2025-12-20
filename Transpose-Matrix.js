1/**
2 * @param {number[][]} matrix
3 * @return {number[][]}
4 */
5var transpose = function(matrix) {
6  const revertedArr = [];
7
8  for (let i = 0; i < matrix[0].length; i++) {
9    revertedArr.push([]);
10    let tem = revertedArr[i];
11    for (let j = 0; j < matrix.length; j++) {
12      tem.push(matrix[j][i]);
13    }
14  }
15
16  // console.log(revertedArr);
17  return revertedArr;
18};