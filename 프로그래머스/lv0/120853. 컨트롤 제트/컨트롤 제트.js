function solution(s) {
    const str = s.split(' ');
    let tmp = 0;
    return str.reduce((acc, cur) => {
        if(cur === 'Z') {
            acc -= tmp;
        } else {
            acc += +cur;    
            tmp = +cur;
        }
        return acc;
    }, 0);
}