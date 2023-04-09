function solution(my_string, num1, num2) {
    const str1 = my_string[num1];
    const str2 = my_string[num2];
    let result = '';
    
    for(let i = 0; i < my_string.length; i++){
        if(i === num1) {
            result += str2;
        } else if(i === num2) {
            result += str1;
        } else {
            result += my_string[i];
        }
    }
    
    return result;
}