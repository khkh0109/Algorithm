function solution(emergency) {
    const result = new Array(emergency.length).fill(0);
    
    const copy = [...emergency];
    
    copy.sort((a, b) => b - a);
    copy.forEach((num, idx) => {
        const index = emergency.indexOf(num);
        result[index] = idx + 1;
    });
    
    return result;
}