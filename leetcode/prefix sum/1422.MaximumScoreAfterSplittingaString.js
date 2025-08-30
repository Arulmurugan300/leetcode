var maxScore = function(s) {
    let max =0;
    let plus =0;
    let left = 0;
    let length = s.length;
    while(left < length-1){
        if(s[left] == '0'){
            plus++;
        }
        let sum = 0;
        for(let right =left+1; right < length; right++){
            if(s[right] == '1'){
                sum ++;
            }
        }
        sum+=plus;
        max=Math.max(max,sum);
        left++;
    }
    return max;
};
maxScore("0110101011")