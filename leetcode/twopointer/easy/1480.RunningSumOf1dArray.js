var runningSum = function(nums) {
    let max =0;
    for(let i=0;i<nums.length; i++){
        max+=nums[i];
        nums[i]=max;
    }
    return nums;
};
runningSum([1,2,3,5,4,6,8,7]);