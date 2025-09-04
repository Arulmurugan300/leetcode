var isPalindrome = function (s) {
    let left = 0;
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
isPalindrome("A man a Panama")