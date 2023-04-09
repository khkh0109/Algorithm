function solution(my_string) {
    let result = '';
    
    for(let i = 0; i < my_string.length; i++) {
        const isInclude = result.includes(my_string[i]);
        result += isInclude ? '' : my_string[i];     
    }
    
    return result;
}