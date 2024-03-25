function solution(str1, str2) {
    let result = '';
    
    for(let i = 0; i < str1.length; i++) {
        result += str1[i];
        for(let j = i; j <= i; j++) {
            result += str2[j];
        }
    }
    
    return result;
}