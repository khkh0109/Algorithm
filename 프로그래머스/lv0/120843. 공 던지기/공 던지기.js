function solution(numbers, k) {
    const index = k * 2 % numbers.length - 2;
    return numbers.at(index);
}