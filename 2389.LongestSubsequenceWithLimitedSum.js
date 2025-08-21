var answerQueries = function (nums, queries) {
  let total = [];
  nums.sort((a, b) => a - b);
  for (let query of queries) {
    let count = 0, add = 0;
    for (let j = 0; j < nums.length; j++) {
      add += nums[j];
      if (add <= query) count++;
      else break;
    }
    total.push(count);
  }
  console.log(total)
  return total;
};
answerQueries([4, 5, 2, 1], [3, 10, 21]);