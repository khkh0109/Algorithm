function solution(numer1, denom1, numer2, denom2) {
    const numer = denom1 * numer2 + denom2 * numer1;
    const denom = denom1 * denom2;
    
    const getGCD = (num1, num2) => {
        let gcd = 1;
        for(let i = 2; i <= Math.min(num1, num2); i++) {
            if(num1 % i === 0 && num2 % i === 0) {
                gcd = i;
            }
        }
        return gcd;
    };
    
    const gcd = getGCD(numer, denom);
    
    return [numer / gcd, denom / gcd];
}