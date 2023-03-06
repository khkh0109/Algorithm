function solution(s) {
    const stack = [];
    
    s.split(' ').forEach(item => {
        if(item === 'Z') {
            stack.pop(item);
        } else {
            stack.push(item);
        }
    });
    
    return stack.reduce((acc, cur) => acc + +cur, 0)
}