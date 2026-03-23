1/**
2 * @param {number[][]} image
3 * @param {number} sr
4 * @param {number} sc
5 * @param {number} color
6 * @return {number[][]}
7 */
8var floodFill = function (image, sr, sc, color) {
9  const m = image.length;
10  const n = image[0].length;
11  const removeColor = image[sr][sc];
12  const replaceByColor = color;
13  const stack = [];
14
15  if (removeColor === replaceByColor) return image;
16  stack.push([sr, sc]);
17
18  while (stack.length) {
19    const [r, c] = stack.pop();
20    image[r][c] = replaceByColor;
21
22    // top
23    const topPosition = r - 1;
24    if (topPosition >= 0 && image[topPosition][c] === removeColor)
25      stack.push([topPosition, c]);
26
27    // bottom
28    const bottomPosition = r + 1;
29    if (bottomPosition < m && image[bottomPosition][c] === removeColor)
30      stack.push([bottomPosition, c]);
31
32    // left
33    const leftPosition = c - 1;
34    if (leftPosition >= 0 && image[r][leftPosition] === removeColor)
35      stack.push([r, leftPosition]);
36
37    // right
38    const rightPosition = c + 1;
39    if (rightPosition < n && image[r][rightPosition] === removeColor)
40      stack.push([r, rightPosition]);
41  }
42
43  return image;
44};