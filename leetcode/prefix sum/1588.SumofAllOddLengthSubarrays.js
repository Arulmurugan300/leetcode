const sumOddLengthSubarrays = function (arr) {
    const length = arr.length;
    let total = 0;
    for (let i = 0; i < length; i++) {
        let left = i + 1;
        let right = length - i;
        let add = left * right;
        let sum = Math.ceil((add) / 2);
        total += sum * arr[i];
    }
    return total;
};
sumOddLengthSubarrays([1, 4, 2, 5, 3])