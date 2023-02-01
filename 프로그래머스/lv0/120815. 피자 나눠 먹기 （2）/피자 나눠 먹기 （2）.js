function solution(n) {
    const gcd = (num1, num2) => num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
    const lcm = n * 6 / gcd(n, 6);
    return lcm / 6;
}