function solution(array) {
    let count = 0;
    
    array.forEach((el) => {
        [...String(el)].forEach((el) => {
            if(el === '7') {
                count++;
            }
        });
    });
    
    return count;
}