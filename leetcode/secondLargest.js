// 2) Write a program that takes in an array of integers and returns the second lowest number. Eg: Input: [10, 5, 3, 14, 8, 2] Output: 3 

const input = [10, 5, 3, 14, 8, 2];
function sort(input){
    for(let i=0; i< input.length; i++){
        for(let j=i+1; j < input.length; j++ ){
            if(input[i] > input[j])
            [input[i],input[j]]=[input[j],input[i]];
        }
    }
    return input[1];
}
console.log(sort(input));