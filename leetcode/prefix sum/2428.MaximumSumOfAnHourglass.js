var maxSum = function (grid) {
  let total = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const sum = grid[i - 1][j] + grid[i - 1][j - 1] + grid[i - 1][j + 1] + grid[i + 1][j] + grid[i + 1][j - 1] + grid[i + 1][j + 1] + grid[i][j];
      if (total < sum) {
        total = sum;
      }
    }
  }
  console.log(total);
  return total;
};
maxSum([[6, 2, 1, 3], [4, 2, 1, 5], [9, 2, 8, 7], [4, 1, 2, 9]])