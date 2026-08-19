/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const n = s.length;
  const m = t.length;

  if (n < m) return "";

  let minLength = Number.POSITIVE_INFINITY;
  let i = 0;
  let j = 0;
  const map = new Map();
  let charCounts = m;
  let startIdx = 0;

  for (let i = 0; i < m; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], 1);
    }
  }

  while (j < n) {
    const jCharacter = s[j];
    const currCount = map.get(jCharacter);
    if (currCount && currCount > 0) {
      map.set(jCharacter, currCount - 1);
      charCounts--;
    } else {
      if (currCount === undefined) {
        map.set(jCharacter, -1);
      } else {
        map.set(jCharacter, currCount - 1);
      }
    }
    // console.log(map);
    // console.log({ i, j, charCounts });

    while (charCounts === 0) {
      const tempMinLength = j - i + 1;
      if (tempMinLength < minLength) {
        minLength = tempMinLength;
        startIdx = i;
      }

      const iCharacter = s[i];
      map.set(iCharacter, map.get(iCharacter) + 1);

      if (map.get(iCharacter) > 0) {
        charCounts++;
      }

      i++;
    }
    j++;
  }

  // console.log({
  //   minLength,
  //   i,
  //   j,
  //   s:
  //     minLength < Number.POSITIVE_INFINITY
  //       ? s.slice(startIdx, startIdx + minLength)
  //       : "",
  // });
  return minLength < Number.POSITIVE_INFINITY
    ? s.slice(startIdx, startIdx + minLength)
    : "";
};