function solution(balls, share) {
    if(balls === share) return 1;
    
    const factorial = (n) => {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }
    
    const n = factorial(balls);
    const m = factorial(share);
    const nm = factorial(balls - share);
    
    return Math.round(n / (nm * m));
}