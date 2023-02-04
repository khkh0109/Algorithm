function solution(array) {
    const obj = {};
    let frequent = 0;
    for(const num of array) {
        obj[num] = (obj[num] || 0) + 1;
        if(frequent < obj[num]) {
            frequent = obj[num];
        }
    }
    
    let same = 0;
    let max = '';
    for(const item in obj) {
        if(obj[item] === frequent) {
            same++;
            max = item;
        }
    }
    
    return same > 1 ? -1 : +max;
}