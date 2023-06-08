function solution(num_list) {
    const square = num_list.reduce((acc, curr) => acc + curr) ** 2;
    const multiply = num_list.reduce((acc, curr) => acc * curr);
    return square > multiply ? 1 : 0;
}