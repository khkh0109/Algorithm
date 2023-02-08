function solution(age) {
    const programmerAge = 'abcdefghij';
    return [...String(age)]
        .map(item => programmerAge[item])
        .join('');
}