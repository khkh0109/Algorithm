function solution(before, after) {
    const a = before.split('').sort();
    const b = after.split('').sort();
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            return 0;
        }
    }
    
    return 1;
}