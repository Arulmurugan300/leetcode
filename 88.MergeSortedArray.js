var merge = function (nums1, m, nums2, n) {
    if (n > 0) {
        let i = 0;
        for (let j = m; j < n + m; j++) {
            nums1[j] = nums2[i];
            i++;
        }
        nums1.sort((a,b)=>a-b);
    }
};

//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6];
