// 3) Print Numbers from 1 to 30 in a loop. In the loop, If the number is divisible by 3 , print - A If the number is divisible by 5 , print - B If the number is divisible by 15 , print - AB else print the number
 
// 4) A = [{id: 10, status: true}, {id: 20, status: false}, {id: 30, status: true}] B = [{id: 10, value:"100"}, {id: 20, value: "200"}, {id: 30, value:"300"}] Output: C = [{id: 10, status: true, value:"100"}, {id: 20, status: false, value:"200"}, {id: 30, status:true, value:"300"}] Join A & B to create new Array C , by using id as the matching key.
 
// 5) Write a program to find and print duplicate characters in a string str = fhdghirtwhdkjgshfe; print the duplicate characters
// output : fhdg
 
// 6) Print the pattern 
//     * 
//    *** 
//   ***** 
//  *******

column = 4;
function star(rows){
// for (let i = 1; i <= rows; i++) {
//   let line = 0;
//   for (let j = 1; j <= rows - i; j++) {
//     line += 1;
//     // console.log('');
    
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line += '*';
//     // console.log('*');
    
//   }
//   console.log(line);
// }

for(let i = 1; i<= rows; i++){
  let space= repeats(' ',rows - i);
  let star = repeats('*',i *2 -1);
  console.log(space + star)
}

}
star(column);
function repeats(char, count){
  let result = '';
  for(let i=0; i < count; i++)
    result+=char;

  return result;
}