var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1

  //mrthod 2
  // return haystack.indexOf(needle);

  // method3
  // return haystack.search(needle);
};
strStr("arulmurugan", "arul");