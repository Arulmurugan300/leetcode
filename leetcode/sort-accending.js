const unsortedArray = [42, 7, 19, 3, 88, 15, 63, 2, 27, 50,22];
//basic method
function sortCall(param) {
  const inputLength = param.length;
  param2 = [...param];
  for (let i = 0; i < inputLength; i++) {
    for(let j=i+1; j< inputLength; j++){
      if(param[i] > param[j]){
        temp = param[i];
        param[i]=param[j];
        param[j]=temp
      }
      if(param2[i] < param2[j]){
        temp = param2[i];
        param2[i]=param2[j];
        param2[j]=temp
      }
    }
  }
  const half = Math.round(inputLength/2);
  const arr1 = param.slice(0,half);
  const arr2 = param.slice(half);
  const length = arr2.length -1;
  reverse=[];
  for (let i=0; i <= length; i++){
    this.reverse[i] = arr2[length-i];
    arr2.pop();
  }
  const final = [...arr1,...reverse]
  return final;
}

console.log(sortCall(unsortedArray));

// another method
function sortCall1(param) {
  const inputLength = param.length;
  param2 = [...param];
  for (let i = 0; i < inputLength; i++) {
    for(let j=i+1; j< inputLength; j++){
      if(param[i] > param[j]){
        [param[i], param[j]]=[param[j],param[i]];
      }
      if(param2[i] < param2[j]){
          [param2[i],param2[j]] = [param2[j],param2[i]];
      }
    }
  }
  const half = Math.round(inputLength/2);
  const half2 = Math.floor(inputLength / 2);
  const final = [...param.slice(0,half),...param2.slice(0,half2)]
  return final;
}
console.log(sortCall1(unsortedArray));

