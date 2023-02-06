function solution(n) {
    const factor = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            factor.push(i);
        }
    }
    return factor.length
}