function diamond(row){
    for(let i =1; i<= row; i++){
        let space = repeatFn(' ',row -i);
        let star = repeatFn('*', 2 * i -1);
        console.log(space + star);
    }
    for(let i=row-1 ; i > 0; i--){
        let space = repeatFn(' ',row -i);
        let star = repeatFn('*', 2 * i -1);
        console.log(space + star);
    }
}
diamond(4)

function repeatFn(Char, count){
    let result ='';
    for(let i=0; i<count;i++){
        result+=Char;
    }
    return result;
}