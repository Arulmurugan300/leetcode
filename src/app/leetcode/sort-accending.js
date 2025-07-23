const unsortedArray = [42, 7, 19, 3, 88, 15, 63, 2, 27, 50];

function sortCall(param) {
  for (let i = 0; i < param.length; i++) {
    for(let j=i+1; j< param.length; j++){
      if(param[i] > param[j]){
      temp = param[i];
      param[i]=param[j];
      param[j]=temp
      }
    }
  }

  console.log(param);
}
sortCall(unsortedArray);
