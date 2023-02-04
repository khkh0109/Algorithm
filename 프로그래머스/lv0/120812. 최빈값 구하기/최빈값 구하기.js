function solution(array) {
    const obj = {};
    for(const num of array) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    const values = Object.values(obj);
    const max = Math.max(...values);
    
    const same = [];
    for(const item in obj) {
        if(obj[item] === max) {
            same.push(item);
        }
    }
    
    return same.length > 1 ? -1 : +same[0];
}