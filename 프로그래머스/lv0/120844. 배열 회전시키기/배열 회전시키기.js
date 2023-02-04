function solution(numbers, direction) {
    if(direction === "right") {
        const last = numbers.at(-1);
        numbers.pop();
        numbers.unshift(last);
    } else {
        const first = numbers.at(0);
        numbers.shift();
        numbers.push(first);
    }
    return numbers;
}