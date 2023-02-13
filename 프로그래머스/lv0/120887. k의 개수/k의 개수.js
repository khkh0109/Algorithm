function solution(i, j, k) {
    let count = 0;
    const regexp = new RegExp(k, 'g');
    for(let start = i; start <= j; start++) {
        const match = String(start).match(regexp);
        if(match){
            count += Number(match.length);
        }
    }
    return count;
}