1/**
2 * @param {number} n
3 * @param {number[][]} edges
4 * @param {number} distanceThreshold
5 * @return {number}
6 */
7var findTheCity = function (n, edges, distanceThreshold) {
8  const matrix = Array.from({ length: n }, (_, rn) =>
9    Array.from({ length: n }, (v, cn) => {
10      if (rn === cn) return 0;
11      return Infinity;
12    }),
13  );
14
15  for (let [u, v, w] of edges) {
16    matrix[u][v] = w;
17    matrix[v][u] = w;
18  }
19
20  for (let k = 0; k < n; k++) {
21    for (let i = 0; i < n; i++) {
22      for (let j = 0; j < n; j++) {
23        const distance = matrix[i][k] + matrix[k][j];
24        if (distance < matrix[i][j]) matrix[i][j] = distance;
25      }
26    }
27  }
28  //   console.log(matrix);
29
30  let minCity = -1;
31  let noOfCities = Infinity;
32
33  for (let city = 0; city < n; city++) {
34    let noOfCityUnderT = 0;
35    for (let neighbor of matrix[city]) {
36      if (neighbor <= distanceThreshold) noOfCityUnderT++;
37    }
38    if (noOfCityUnderT <= noOfCities) {
39      noOfCities = noOfCityUnderT;
40      minCity = city;
41    }
42  }
43
44  return minCity;
45};