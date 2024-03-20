function solution(my_string, overwrite_string, s) {
    const myStringArr = [...my_string];
    myStringArr.splice(s, overwrite_string.length, overwrite_string);
    return myStringArr.join('');
    
}