function palindrom(str){
    left =0;
    right = str.length -1;
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
var text = "masaam";
console.log(palindrom(text));
