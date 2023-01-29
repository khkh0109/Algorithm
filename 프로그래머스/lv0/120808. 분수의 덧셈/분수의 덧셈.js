function solution(numer1, denom1, numer2, denom2) {
    const numer = denom1 * numer2 + denom2 * numer1;
    const denom = denom1 * denom2;
    
    const getGCD = (num1, num2) => num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
    
    const gcd = getGCD(numer, denom);
    
    return [numer / gcd, denom / gcd];
}