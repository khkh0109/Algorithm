function solution(box, n) {
    return box
        .map(num => Math.trunc(num / n))
        .reduce((acc, cur) => acc * cur);
}