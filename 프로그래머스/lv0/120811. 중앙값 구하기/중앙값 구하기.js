function solution(array) {
    const center = Math.floor(array.length / 2);
    return array.sort((a, b) => a - b)[center];
}