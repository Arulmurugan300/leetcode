function mergeString(param1,param2){

  // const string1=JSON.string()
  const maxLength = Math.max(param1.length,param2.length);
  result='';
  for(let i=0; i < maxLength; i++){
    if(param1[i])
    result+=(param1[i]);
    if(param2[i])
    result+=(param2[i]);
  }
  return result;
}
console.log(mergeString('abcdefg','1234'));
