// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
var isPalindrome = function (head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
isPalindrome([[1,2,2,1]]);