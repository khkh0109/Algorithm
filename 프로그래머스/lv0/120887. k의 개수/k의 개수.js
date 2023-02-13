function solution(i, j, k) {
    let result = '';
    
    const regexp = new RegExp(k, 'g');
    
    for(i; i <= j; i++) {
       result += i;    
    }
    
    const matchNum = result.match(regexp);
    
    return  matchNum ? matchNum.length : 0;
}