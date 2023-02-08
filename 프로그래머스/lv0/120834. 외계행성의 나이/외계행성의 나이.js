function solution(age) {
    const programmerAge = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return [...String(age)]
        .map(item => programmerAge[item])
        .join('');
}