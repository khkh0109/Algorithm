function solution(my_string) {
    return my_string.match(/[0-9]/g).map(num => +num).sort((a, b) => a - b);
}