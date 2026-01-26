1const isSafeToPlace = (chessBoard, currRow, currCol, n) => {
2  // column
3  for (let i = currRow - 1; i >= 0; i--) {
4    if (chessBoard[i][currCol] === "Q") return false;
5  }
6  // console.log("column");
7
8  // left digonal
9  for (let i = currRow - 1, j = currCol - 1; i >= 0 && j >= 0; i--, j--) {
10    if (chessBoard[i][j] === "Q") return false;
11  }
12  // console.log("left digonal");
13
14  // right digonal
15  for (let i = currRow - 1, j = currCol + 1; i >= 0 && j < n; i--, j++) {
16    if (chessBoard[i][j] === "Q") return false;
17  }
18  // console.log("right digonal");
19
20  return true;
21};
22
23// console.log(isSafeToPlace(["Q...", "Q...", "....", "...."], 1, 0, 4));
24
25const findSafePlaces = (chessBoard, currRow, n, safePlaces) => {
26  if (currRow === n) {
27    safePlaces.push(chessBoard.map((row) => row.join("")));
28    return;
29  }
30
31  for (let i = 0; i < n; i++) {
32    if (isSafeToPlace(chessBoard, currRow, i, n)) {
33      chessBoard[currRow][i] = "Q";
34      // console.log(chessBoard[currRow], { currRow, i });
35      findSafePlaces(chessBoard, currRow + 1, n, safePlaces);
36      chessBoard[currRow][i] = ".";
37    }
38  }
39};
40
41/**
42 * @param {number} n
43 * @return {string[][]}
44 */
45var solveNQueens = function (n) {
46  const chessBoard = Array.from({ length: n }, () => Array(n).fill("."));
47  const safePlaces = [];
48
49  findSafePlaces(chessBoard, 0, n, safePlaces);
50
51//   console.log(safePlaces);
52  return safePlaces;
53};