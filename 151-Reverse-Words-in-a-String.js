/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
      const n = s.length;
  let i = n - 1;
  let strArr = [];

  while (i >= 0) {
    if (s[i] !== " ") {
      let tempStr = "";
      let j = i;

      while (j >= 0 && s[j] !== " ") {
        tempStr = s[j] + tempStr;
        j--;
      }
      strArr.push(tempStr);
      i = j;
    } else {
      i--;
    }
  }

  return strArr.join(" ");
};