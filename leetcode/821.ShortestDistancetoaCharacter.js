var shortestToChar = function (s, c) {
  let output = [];
  let min = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) output.push(i);
  }
  for (let i = 0; i < s.length; i++) {
    min[i] = s.length
    for (let index of output) {
      let minValue = index - i;
      min[i] = Math.abs(Math.min(min[i], minValue))
    }
  }
  return min;
};

shortestToChar("loveleetcode", "e");