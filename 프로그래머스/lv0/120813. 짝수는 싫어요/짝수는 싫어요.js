function solution(n) {
    return Array(n).fill(1).map((n, i) => n + i).filter(n => n % 2 !== 0);
}