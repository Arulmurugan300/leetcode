var largestAltitude = function (gain) {
    let max = 0, sample = 0;
    for (let i = 0; i < gain.length; i++) {
        sample += gain[i];
        max = Math.max(max, sample)
    }
    return max;
};
largestAltitude([-5, 1, 5, 0, -7])