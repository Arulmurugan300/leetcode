const input = [1,[2,[3,[4]],5]];
let sumTotal = 0
function sum(x){
  for(let i=0; i < x.length; i++){
    if(x[i].length > 0){
      sum(x[i]);
    }
    else{
      sumTotal+=x[i];
    }
  }
  return sumTotal;
}
console.log(sum(input));
