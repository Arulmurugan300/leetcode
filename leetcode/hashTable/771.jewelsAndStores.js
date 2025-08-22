var numJewelsInStones = function (jewels, stones) {
  const jewel = new Set(jewels);
  let count = 0
  for (index of stones) {
    if (jewel.has(index)) {
      count++;
    }
  } console.log(count)
  return count;
};

numJewelsInStones("aA", "aAAbbbb");