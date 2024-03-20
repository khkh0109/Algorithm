function solution(my_string, n) {
    const startIndex = my_string.length - n;
    return my_string.slice(startIndex);
}