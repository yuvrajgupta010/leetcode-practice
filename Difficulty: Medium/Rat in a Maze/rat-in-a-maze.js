const openPaths = (maze, n, currRow, currCol) => {
 const options = [];

  // Down
  if (currRow + 1 < n) {
    if (maze[currRow + 1][currCol] === 1) {
      options.push([[currRow + 1, currCol], "D"]);
    }
  }

  // Left
  if (currCol - 1 >= 0) {
    if (maze[currRow][currCol - 1] === 1) {
      options.push([[currRow, currCol - 1], "L"]);
    }
  }

  // Right
  if (currCol + 1 < n) {
    if (maze[currRow][currCol + 1] === 1) {
      options.push([[currRow, currCol + 1], "R"]);
    }
  }

  // Up
  if (currRow - 1 >= 0) {
    if (maze[currRow - 1][currCol] === 1) {
      options.push([[currRow - 1, currCol], "U"]);
    }
  }

  return options;
};

const pathFinder = (maze, n, currRow, currCol, currPath, pathCollections) => {
  if (currRow === n - 1 && currCol === n - 1) {
    pathCollections.push([...currPath].join(""));
  }

  const allPaths = openPaths(maze, n, currRow, currCol);

  for (let i = 0; i < allPaths.length; i++) {
    currPath.push(allPaths[i][1]);
    maze[allPaths[i][0][0]][allPaths[i][0][1]] = -1;
    pathFinder(
      maze,
      n,
      allPaths[i][0][0],
      allPaths[i][0][1],
      currPath,
      pathCollections,
    );
    currPath.pop();
    maze[allPaths[i][0][0]][allPaths[i][0][1]] = 1;
  }
};


/**
 * @param {number[][]} mat
 * @returns {string[]}
 */
class Solution {
    ratInMaze(maze) {
        // code here
          const pathCollections = [];
  if (maze.length < 2) return pathCollections;

  maze[0][0] = -1;
  pathFinder(maze, maze.length, 0, 0, [], pathCollections);

  // console.log(pathCollections);
  return pathCollections;
    }
}