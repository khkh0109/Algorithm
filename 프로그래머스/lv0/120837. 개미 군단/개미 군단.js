function solution(hp) {
    // 장군개미 5, 병정개미 3, 일개미 1 
    let count = 0;
    let sum = hp;

    while(0 < sum) {
        if(sum >= 5) {
            sum -= 5;
            count++;
        } else if(sum >= 3) {
            sum -= 3;
            count++;
        } else {
            sum -= 1;
            count++;
        }
    }
    
    return count;
}