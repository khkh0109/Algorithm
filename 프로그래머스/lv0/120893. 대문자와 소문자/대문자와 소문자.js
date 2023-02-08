function solution(my_string) {
    let result = ''
    for(let i = 0; i < my_string.length; i++) {
        const lowerCase = /[a-z]/g.test(my_string[i]);
        if(lowerCase) { 
            result += my_string[i].toUpperCase();
        } else {
            result += my_string[i].toLowerCase();
        }
    }
    return result;
}