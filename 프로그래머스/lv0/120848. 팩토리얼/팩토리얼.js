function solution(n) {
    let result = 1;
    let count = 1;
    
    while(true) {
        result *= count;
        
        if(result > n) return count - 1;
        if(result === n) return count;
        
        count++;
    }
}