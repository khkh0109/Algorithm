function solution(age) {
    const programmerAge = 'abcdefghij';
    return String(age).replace(/./g, num => programmerAge[num]);
}