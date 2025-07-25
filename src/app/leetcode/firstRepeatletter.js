function printNonReapeatingChar(word) {
  obj={};
  count=0
  for(let i=0; i < word.length; i++){
    if(obj[word[i]]){
      obj[word[i]] = obj[word[i]]+1;
    }
    else
    obj[word[i]]=1;
  }
  for(a in obj){
    if(obj[a] == 1){
      return a
    }
  }
}
console.log(printNonReapeatingChar("SWIWSSI"));
